from pathlib import Path
import re

p = Path('index.html')
s = p.read_text(encoding='utf-8')
Path('.review/index.before.html').write_text(s, encoding='utf-8')

def replace(old, new):
    global s
    if old not in s:
        raise ValueError('Missing: ' + old[:90])
    s = s.replace(old, new)

nav = '''<nav class="nav-menu" id="primaryNav" aria-label="Main navigation">
        <a href="#smart-sort" class="nav-link">Features</a>
        <a href="#pricing" class="nav-link">Pricing</a>
        <a href="#faq" class="nav-link">FAQ</a>
      </nav>'''
s = re.sub(r'<nav class="nav-menu">.*?</nav>', nav, s, count=1, flags=re.S)
s = re.sub(r'\s*<button id="openShortcutsBtn".*?</button>', '', s, count=1, flags=re.S)
replace('id="mobileToggle" aria-label="Toggle menu"', 'id="mobileToggle" type="button" aria-label="Open menu" aria-controls="primaryNav" aria-expanded="false"')

copy = {
'Clipra is the next-generation clipboard manager for macOS and iOS. Featuring zero-latency Smart Auto-Sort, real-time Text Transformation, and zero-server private iCloud sync.': 'Keep links, code, and everyday copies organized with Clipra. Smart Auto-Sort, text transformations, and private iCloud sync for Mac, iPhone, and iPad.',
'Engineered for macOS 26 Liquid Glass &amp; iOS 26': 'For Mac, iPhone &amp; iPad',
'Zero Server Footprint': 'Private iCloud sync',
'Never lose a link, color palette, or code snippet again. Clipra pairs zero-latency Smart Auto-Sort with instant Text Transformation and private iCloud sync — at half the price of Paste.': 'Keep the links, colors, and code you copy in the right place. Clipra sorts them into pinboards, cleans up text before you paste, and syncs your history through your own iCloud account.',
'Explore Interactive Demo': 'See how it works',
'100% Private iCloud (No AR Swift Servers)': 'iCloud sync with Pro',
"$14.99/yr vs Paste's $29.99": 'Pro from $14.99/year',
'Search history or OCR...': 'Search clipboard history...',
'Unique Differentiator #1': 'Smart Auto-Sort',
'Paste stores everything.<br><span class="text-gradient">Clipra organizes it automatically.</span>': 'Copy it.<br><span class="text-gradient">Find it where it belongs.</span>',
"Users requested rule-based auto-sorting on Paste's idea board for years with 125+ votes. Paste never built it. Clipra analyses copied data in under 50ms using Apple NaturalLanguage and regex engines to route items straight into the right pinboard.": 'Links go to Links. Color codes go to Colors. Set rules by content or source app, and let Clipra organize new copies as you work.',
'Live Rule Engine Simulator': 'Try an auto-sort example',
'Click any sample copy item to see the real-time routing logic in action:': 'Choose a sample to preview how a rule sorts it into a pinboard.',
'Step 1: Copied to System Clipboard': 'Sample copied item',
'Execution Time:': 'Interactive preview',
'18ms (Zero Lag)': 'Sample rule result',
'Unique Differentiator #2': 'Text Transformer',
'Paste stores raw text only. With Clipra, a single shortcut (<span class="kbd">⌥Enter</span>) or long-press transforms your copied text on the fly. Clean tracking params, prettify messy JSON, convert cases, or strip styling without opening another tool.': 'Clean tracking parameters from a link, format JSON, change letter case, or paste as plain text. Choose a transformation without opening another tool.',
'⚡ URL Slugify': 'URL Encode',
'data-trans="slug"': 'data-trans="urlencode"',
'Stripped 79 tracking characters': 'Tracking parameters removed',
'Engineered For Your Workflow': 'For your everyday work',
'Built for high-output <span class="text-gradient">professionals.</span>': 'Less retyping.<br><span class="text-gradient">More getting things done.</span>',
'Whether you ship code, polish interfaces, run growth campaigns, or manage agencies — Clipra cuts repetitive paste friction out of your day.': 'Keep the snippets, references, and replies you reach for throughout the day close at hand.',
'For UI/UX Designers': 'Designers',
'For Growth &amp; Marketers': 'Marketers',
'For Agency &amp; Teams': 'Client work',
'For Developers': 'Developers',
'Syntax-aware code snippets &amp; terminal tokens.': 'Keep useful commands and code close by.',
'Syntax-aware code snippets & terminal tokens.': 'Keep useful commands and code close by.',
'Never re-type SSH keys, Docker commands, or regex patterns. Clipra auto-routes Swift, JS, Python, and SQL snippets to your Dev pinboard. Prettify nested JSON with a single keystroke.': 'Save commands and code snippets to a development pinboard. Find a pattern you used earlier, or format a JSON response before pasting it into your editor.',
'Native Apple Synergy': 'Across your devices',
'Synced in lockstep.': 'One clipboard history.',
'Clipra works natively across the entire Apple ecosystem. Copy on your Mac, paste immediately on your iPhone via our dedicated custom keyboard extension — without switching apps or touching third-party servers.': 'Keep your history on Mac, iPhone, and iPad with private iCloud sync. Use the Clipra keyboard to paste saved items in supported iOS apps. Sync timing depends on your connection and iCloud.',
'Paste from your entire clipboard history directly while typing in WhatsApp, Slack, Apple Mail, or Safari. Compact 200px drawer designed strictly to Apple HIG.': 'Switch to the Clipra keyboard to access saved clips while typing in apps that support custom keyboards.',
'Zero-Server Private iCloud Sync': 'Your own iCloud account',
'We store nothing. Your clipboard records travel strictly inside your own private Apple CloudKit database. No AR Swift servers, zero risk of data exposure.': 'History is stored locally, with Pro sync through your private iCloud database. Your clipboard content is not stored on AR Swift servers.',
'Dynamic Island &amp; Lock Screen Widgets': 'Home Screen &amp; Dynamic Island',
'Instant clipboard status and last 3 copied tokens available right on your iPhone Dynamic Island and Home Screen widgets.': 'See your last three saved items in a Home Screen widget, with quick access planned for Dynamic Island.',
'v1.0 Launch Architecture': 'More ways to use your clipboard',
"Everything power users need.<br><span class=\"text-gradient\">Nothing they don't.</span>": 'The copies you need.<br><span class="text-gradient">Ready to use again.</span>',
'Crafted specifically for developers, designers, and high-velocity teams who copy hundreds of times each day.': 'Find an earlier copy, back up your history, or paste several items in order.',
'Copy multiple items in sequence with <span class="kbd">⌘C</span> <span class="kbd">⌘C</span> <span class="kbd">⌘C</span>, then paste them in exact order one by one with <span class="kbd">⌘V</span>. Zero context switching.': 'Collect several copied items, then paste them one by one in order with Paste Stack on Mac.',
"The #1 request on Paste's public board with 161 votes. Export your entire clipboard history to structured JSON for corporate backup, compliance, or local migration.": 'Export your history as a JSON file on Mac. Keep a local backup or import it when you move to another machine.',
'Enterprise-Ready &bull; 100% Offline': 'Mac &bull; Local JSON backups',
'Screen Share Stealth': 'Screen Share Hide',
'Present with confidence. Clipra automatically detects screen sharing across Zoom, Google Meet, and Teams to hide sensitive snippets and credentials.': 'Keep the clipboard panel out of view during presentations and screen recordings on Mac.',
'Privacy Protection &bull; Zero Leaks': 'Mac &bull; Presentation privacy',
'OCR Power Search': 'Search Your History',
'Search text located inside screenshots, filter by source app (Figma, Terminal, Safari), and find copies by exact timestamp or regex query.': 'Find a saved clip by searching your history. Narrow the results by content type, source app, or date.',
'Instant Query Engine': 'Filter by type, app, and date',
'Lock your sensitive pinboards and complete history behind Touch ID on Mac and Face ID on iPhone &amp; iPad.': 'Protect access to your history with Face ID or Touch ID on supported iPhone and iPad models.',
'Hardware-Level Secure Enclave': 'iPhone &amp; iPad &bull; Biometric lock',
'Accidentally removed an important API token or contract address? Clipra keeps deleted items safe for 30 days before permanent purging.': 'Deleted a link or snippet by mistake? Recover it from the trash for up to 30 days.',
'Simple, Fair Monetization': 'Simple pricing',
"No expiry anxiety.<br><span class=\"text-gradient\">Upgrade when you're ready.</span>": 'Start free.<br><span class="text-gradient">Keep more with Pro.</span>',
"Paste cuts you off after 7 days. Clipra gives you 50 items free forever. When you're ready for unlimited power, upgrade at half Paste's price.": 'Keep your last 50 copies and two pinboards for free. Upgrade for unlimited history, Smart Auto-Sort, and iCloud sync.',
'Genuinely usable. Perfect for getting started.': 'For the things you copy every day.',
'Up to 50 clipboard items history': 'Your last 50 clipboard items',
'All Keyboard Shortcuts (<span class="kbd">⌘⇧V</span>)': 'Local clipboard history',
'Basic Text Transformations': 'No iCloud sync',
'★ Most Popular &bull; 50% Less than Paste': 'Unlimited history &amp; iCloud sync',
'All 10 Text Transformations': 'All text transformations',
'Includes Phase 2 Apple Intelligence tools': 'One purchase for your devices',
"Everything you need to know about Clipra's permissions, privacy, and architecture.": 'A few things to know about your history, devices, and plans.',
"No. Clipra maintains zero external servers. All clipboard storage and device sync happen strictly inside your private Apple iCloud container using Apple's CloudKit framework. AR Swift has zero access to your copied passwords, links, or documents.": 'The planned design stores history locally and uses your private iCloud database for Pro sync. Clipboard content is not stored on AR Swift servers. Privacy rules let you exclude sensitive apps and content.',
"Clipra runs an ultra-fast (&lt;50ms) classification pipeline on your device combining Apple's NaturalLanguage framework and custom regex rules. It categorizes URLs, hex/rgb colors, code languages (Swift, JavaScript, Python, SQL), emails, and JSON payloads. You can also define custom rules (e.g., &ldquo;route copies from Figma to Design Assets&rdquo;).": 'Rules match content such as links, color codes, and email addresses to a pinboard. You can also create rules based on the source app, such as sending copies from Figma to Design Assets.',
'iOS restricts persistent background clipboard polling for privacy. Clipra solves this elegantly by providing a dedicated iOS Custom Keyboard Extension and Action Share Sheet. You can open Clipra inside any iOS keyboard drawer and paste directly without leaving the app you are in.': 'Clipra does not continuously capture copies in the background on iPhone or iPad. Use the Share Sheet to save an item, or the Clipra keyboard to access saved history in apps that support custom keyboards.',
"Why is Clipra priced at $14.99/yr compared to Paste's $29.99/yr?": 'What is the difference between Free, Pro, and Lifetime?',
'Because we use private iCloud sync with zero proprietary server maintenance overhead, our infrastructure operating cost is effectively zero. We pass these savings directly to you with 50% lower annual pricing and a true $49.99 lifetime purchase option that Paste refuses to offer affordably.': 'Free keeps your last 50 items and two pinboards on your device, without iCloud sync. Pro adds unlimited history and all launch features for $1.99/month or $14.99/year. Lifetime includes Pro features and future updates for a one-time $49.99 purchase.',
'Can I export my clipboard history if I change machines or need compliance?': 'Can I back up or move my clipboard history?',
'Yes! This is one of our key differentiators (161 votes on competitor boards). Clipra allows you to export your entire history to cleanly formatted JSON at any time with a single click, completely offline.': 'JSON export and import are planned for Mac with Pro and Lifetime. Save a local backup of your history and import it on another Mac.',
'Get Started in 10 Seconds': 'Keep your next good idea',
'Upgrade your clipboard to <span class="text-gradient">liquid glass.</span>': 'Copy something useful.<br><span class="text-gradient">Keep it within reach.</span>',
'50 items free forever. No credit card required. Experience why thousand-person engineering and design teams are switching to Clipra.': 'Your links, code snippets, and everyday notes, organized in one place. Start with 50 items and two pinboards for free.',
'Requires macOS 26 Tahoe or later &bull; iOS 26 companion app included': 'Designed for Mac, iPhone &amp; iPad',
'The clipboard that organizes itself. Engineered with Swift, Apple CloudKit, and macOS Liquid Glass design.': 'A home for the things you copy. Organize, find, and reuse them across your Apple devices.',
'Concept &amp; Architecture by AR Swift Private Limited.': 'Made by AR Swift Private Limited.',
'Capabilities': 'Features',
'<li><a href="#comparison">vs Paste App</a></li>': '<li><a href="#usecases">Use cases</a></li>',
'<li><a href="updates.html#architecture">Swift Architecture</a></li>': '<li><a href="updates.html#architecture">What we are building</a></li>',
'<li><a href="#">macOS Menu Bar App</a></li>': '<li><a href="#features">Mac menu bar app</a></li>',
'<li><a href="#">iOS Keyboard Extension</a></li>': '<li><a href="#sync">iPhone keyboard</a></li>',
'<li><a href="#">iPadOS Split View</a></li>': '<li><a href="#sync">iPad companion</a></li>',
'<li><a href="#">Dynamic Island Widget</a></li>': '<li><a href="#sync">Widgets</a></li>',
'<a href="#faq">Privacy Policy</a>': '<a href="#faq">Privacy questions</a>',
'<a href="#faq">Terms of Service</a>': '<span>Terms available at launch</span>',
'<a href="updates.html">Changelog</a>': '<a href="updates.html">Roadmap</a>',
"copyBtnText.textContent = 'Selected Text Copied!';": "copyBtnText.textContent = 'Could not copy — select the text above.';",
'Direct Figma token swatches & SVG extractors.': 'Keep colors and design references together.',
'Copies of hex codes and RGB strings instantly render live interactive swatches. Copy SVG icons directly from browser inspect into Figma or Illustrator without saving files.': 'Collect color codes and useful links in a design pinboard. Set a rule for copies from your design app so references stay together.',
'SVG Code Optimizer': 'Design Pinboards',
'OCR Image Search': 'History Search',
'const primaryAccent = "#00E5BE"; // 4.5:1 WCAG AA Verified': 'const primaryAccent = "#00E5BE";',
'✓ Auto-routed to Design Assets • Figma link attached': 'Example: saved to Design Assets',
'Zero tracking mess. Clean sharing links everywhere.': 'Share a link without the tracking tags.',
'Stop pasting ugly 200-character links stuffed with UTM tags, fbclid, and referral crumbs into client emails and pitch decks. Clipra strips the clutter silently in milliseconds.': 'Remove tracking parameters before sharing a link in a client email or presentation. Keep the page address easy to read.',
'Slug Formatter': 'URL Encode / Decode',
'✓ Clean URL • 6 query params stripped automatically': 'Example: tracking parameters removed',
'AGENCY & PRODUCT TEAMS': 'CLIENT WORK',
'Paste Stacks & reusable client presentation templates.': 'Bring your project notes into one place.',
'Collect 10 different bullet points across multiple docs and paste them in sequential sequence into your proposal deck with Paste Stack. Zero back-and-forth.': 'Collect details from several documents and paste them in order with Paste Stack on Mac. Keep reusable client notes in your own pinboards. Shared team boards are planned for a later release.',
}
for old,new in copy.items(): replace(old,new)

# Avoid publishing an unsupported competitor matrix as fact.
s = re.sub(r'  <!-- HONEST COMPARISON TABLE.*?(?=  <!-- PRICING TIERS)', '', s, flags=re.S)
s = re.sub(r'<section class="stats-strip">.*?</section>', '''<section class="stats-strip" aria-label="Clipra at a glance">
    <div class="container"><div class="stats-grid">
      <div><div class="stat-number text-gradient-teal">50</div><div class="stat-label">Saved items on the free plan</div></div>
      <div><div class="stat-number text-gradient-blue">2</div><div class="stat-label">Free pinboards for your favorites</div></div>
      <div><div class="stat-number text-gradient">iCloud</div><div class="stat-label">Private sync with Pro</div></div>
      <div><div class="stat-number text-gradient-teal">$14.99</div><div class="stat-label">Per year for Pro</div></div>
    </div></div>
  </section>''', s, count=1, flags=re.S)
replace('<!-- ECOSYSTEM CONTINUITY & PRIVACY -->\n  <section class="section-spacing"', '<!-- ECOSYSTEM CONTINUITY & PRIVACY -->\n  <section id="sync" class="section-spacing"')
replace("slug: {\n          before: '10 Reasons Why Clipra Is Faster Than Paste in 2026!',\n          after: '10-reasons-why-clipra-is-faster-than-paste-in-2026',\n          savings: 'Converted to SEO-friendly lowercase URL slug'", "urlencode: {\n          before: 'design notes & colors',\n          after: 'design%20notes%20%26%20colors',\n          savings: 'Encoded text for use in a URL'")
replace("'Tracking parameters removed & tokens'", "'Tracking parameters removed'")
replace("'Detected: Swift language snippet (NSSpeech / Syntax)'", "'Example: Swift code snippet'")
replace("'NaturalLanguage syntax analyzer detected Swift keywords (`func`, `async`, `throws`). Formatted with syntax tokens.'", "'This sample shows how a code rule can send a snippet to your development pinboard.'")
replace("'Detected: RFC 5322 Compliant Email Address'", "'Example: email address'")
replace("'Regex verified valid email address. Prepared Mailto trigger and routed to Contacts pinboard.'", "'An email rule sends this sample to the Contacts pinboard.'")
s = re.sub(r'Regex pattern <code.*?</code> matched\. Automatically assigned color tag and swatched preview\.', 'This sample matches a color rule and is sent to the Brand Colors pinboard.', s)
replace('Clipra Shelf — macOS Liquid Glass', 'Clipra for Mac — interface preview')

# Responsive navigation is controlled by CSS, so mobile styles never leak to desktop.
start = s.index('      // 9. MOBILE NAV TOGGLE')
end = s.index('\n    });', start)
s = s[:start] + '''      // Responsive navigation: close on selection, outside click, Escape, or resize.
      const mobileToggle = document.getElementById('mobileToggle');
      const navMenu = document.getElementById('primaryNav');
      const mobileQuery = window.matchMedia('(max-width: 900px)');
      const setMenuOpen = (open) => {
        navMenu.classList.toggle('is-open', open);
        mobileToggle.setAttribute('aria-expanded', String(open));
        mobileToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      };
      mobileToggle.addEventListener('click', () => setMenuOpen(mobileToggle.getAttribute('aria-expanded') !== 'true'));
      navMenu.addEventListener('click', (event) => {
        if (event.target.closest('a')) setMenuOpen(false);
      });
      document.addEventListener('click', (event) => {
        if (!event.target.closest('.header')) setMenuOpen(false);
      });
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && mobileToggle.getAttribute('aria-expanded') === 'true') {
          setMenuOpen(false);
          mobileToggle.focus();
        }
      });
      mobileQuery.addEventListener('change', () => setMenuOpen(false));''' + s[end:]
replace("if (stage && window.innerWidth > 768)", "if (stage && window.innerWidth > 768 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches)")

css = '''
    /* Navigation and accessibility refinements */
    :root { --text-muted: #94A3B8; --text-dim: #94A3B8; }
    .nav-wrapper { gap: 24px; }
    .nav-link { display: inline-flex; align-items: center; min-height: 44px; }
    .nav-link::after { bottom: 2px; }
    .brand, .nav-cta-group { flex-shrink: 0; }
    .mobile-menu-btn { min-width: 44px; min-height: 44px; }
    :focus-visible { outline: 2px solid var(--accent-teal); outline-offset: 5px; }
    .skip-link { position: fixed; top: -100px; left: 16px; padding: 12px 20px; background: #0E1526; z-index: 300; }
    .skip-link:focus { top: 12px; }
    .faq-item.open .faq-answer { max-height: none; }
    .modal-content { max-height: calc(100dvh - 40px); overflow-y: auto; }
    .hero-badge-wrap .glass-pill { flex-wrap: wrap; justify-content: center; }
    .sim-grid-layout > *, .trans-editor-grid > *, .ecosystem-grid > * { min-width: 0; }
    @media (max-width: 900px) {
      .nav-menu.is-open { display: flex; position: absolute; top: 100%; left: 0; right: 0; flex-direction: column; align-items: stretch; gap: 4px; padding: 16px 24px; background: #080C16; border-bottom: 1px solid var(--border-glass); box-shadow: 0 16px 24px rgba(0,0,0,.3); max-height: calc(100dvh - 74px); overflow-y: auto; }
      .nav-menu .nav-link { padding: 8px 12px; border-radius: 8px; }
      .nav-menu .nav-link:hover { background: rgba(255,255,255,.05); }
      .nav-link::after { display: none; }
    }
    @media (max-width: 550px) {
      .nav-wrapper { gap: 12px; }
      .nav-cta-group { gap: 8px; }
      .nav-cta-group .btn { padding: 10px 12px; font-size: 12px; }
      .nav-cta-group .btn svg { display: none; }
      .brand { gap: 8px; }
      .trans-action-bar { flex-wrap: wrap; gap: 12px; }
      .cta-card-epic { padding: 40px 20px; }
    }
    @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior: auto; }
      *, *::before, *::after { animation: none !important; transition: none !important; }
    }
'''
replace('  </style>', css + '  </style>')
replace('<body>', '<body id="top">\n  <a class="skip-link" href="#main">Skip to content</a>')
replace('  <!-- HERO SECTION -->', '  <main id="main">\n  <!-- HERO SECTION -->')
replace('  <!-- FOOTER -->', '  </main>\n  <!-- FOOTER -->')
replace('<a href="#" class="brand"', '<a href="#top" class="brand"')

# Expose FAQ state and hide collapsed answers from assistive technology.
replace("faqItems.forEach(item => {", "faqItems.forEach((item, index) => {")
replace("const questionBtn = item.querySelector('.faq-question');", """const questionBtn = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        answer.id = `faq-answer-${index}`;
        questionBtn.setAttribute('aria-controls', answer.id);
        questionBtn.setAttribute('aria-expanded', String(item.classList.contains('open')));
        answer.hidden = !item.classList.contains('open');""")
replace("faqItems.forEach(i => i.classList.remove('open'));", """faqItems.forEach(i => {
            i.classList.remove('open');
            i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            i.querySelector('.faq-answer').hidden = true;
          });""")
replace("item.classList.add('open');", "item.classList.add('open');\n            questionBtn.setAttribute('aria-expanded', 'true');\n            answer.hidden = false;")
p.write_text(s, encoding='utf-8')

# Keep the linked roadmap consistent with the brief and development status.
p = Path('updates.html')
u = p.read_text(encoding='utf-8')
Path('.review/updates.before.html').write_text(u, encoding='utf-8')
u = re.sub(r'<nav class="nav-menu">.*?</nav>', '''<nav class="nav-menu" aria-label="Main navigation">
        <a href="index.html#smart-sort" class="nav-link">Features</a>
        <a href="index.html#pricing" class="nav-link">Pricing</a>
        <a href="index.html#faq" class="nav-link">FAQ</a>
      </nav>''', u, count=1, flags=re.S)
updates = {
'The Clipra Product &amp; Engineering Journal': 'The Clipra roadmap',
'A transparent look into what we are building for Clipra v1.0, our Swift architecture decisions, and what comes next after launch.': 'Clipra is in development. Here is what we are planning for the first release and exploring for later. Features may change as we test.',
'Paste adopted Liquid Glass in Sept 2025. Clipra launches natively on macOS 26 Tahoe and iOS 26 with zero server costs, passing 50% savings to users.': 'We are building a clipboard manager for Mac, iPhone, and iPad, with automatic organization, text tools, and private iCloud sync.',
'v1.0 Milestone Testing': 'In development',
'Unique Differentiator #1': 'Planned for v1.0',
'Unique Differentiator #2': 'Planned for v1.0',
'Smart Auto-Sort Engine (<50ms Latency)': 'Smart Auto-Sort',
"Rules auto-route copies into designated pinboards. URLs route to Clean Links, hex/rgb values to Design Tokens, and syntax-recognized code snippets to Code Repository using Apple's NaturalLanguage classification.": 'Rules will sort copied links, color codes, and code snippets into pinboards. Custom rules will let you organize by content or source app.',
'Instant Text Transformer (10 Tools in 1 Step)': 'Text Transformer',
'Paste and transform simultaneously. Strip UTM and marketing referral tags, prettify/minify JSON payloads, encode/decode Base64, and strip rich-text HTML styling with a single ⌥Enter keystroke.': 'Clean tracking parameters from links, format JSON, change letter case, encode or decode text, and remove formatting. Transformations are planned to run on your device.',
'Status: 10 Transforms Implemented Offline': 'Status: Planned for the first release',
'Zero-Server Security': 'Privacy',
'100% Private Apple CloudKit Continuity': 'Private iCloud sync',
"Your clipboard never leaves the encrypted Apple boundary. Sync occurs strictly inside the user's private iCloud database with zero intermediate servers owned by AR Swift.": 'The planned design stores history locally and syncs through your private iCloud database. Clipboard content will not be stored on AR Swift servers.',
'Privacy: End-to-End Encrypted via Apple CloudKit': 'Planned for Pro and Lifetime',
'Since iOS restricts background clipboard sniffing, Clipra delivers a dedicated custom keyboard drawer allowing one-tap pasting directly inside Messages, WhatsApp, and Slack without app-switching.': 'A custom keyboard will provide access to saved history in supported apps. A Share Sheet extension will let you save items on iPhone and iPad. Background clipboard capture is not part of the iOS plan.',
'Enterprise &amp; Compliance': 'Backup &amp; presentation tools',
'Offline JSON Export &amp; Screen Share Stealth': 'JSON backups &amp; Screen Share Hide',
'Export your entire clipboard archive to structured JSON for corporate backup or migration. Screen Share stealth automatically detects Zoom, Meet, and Teams calls to hide Clipra from viewers.': 'Export and import history as JSON on Mac. Screen Share Hide is planned to keep the clipboard panel out of view during presentations and recordings.',
'Community Request: 161 Votes Solved': 'Status: Planned for Mac',
'Features scheduled for subsequent updates once Apple Intelligence APIs reach full maturity:': 'Ideas for later releases. These are not included in the v1.0 feature list:',
'Paste MCP / AI Agent Integration': 'MCP / AI Tool Integration',
'href="index.html#pricing" class="btn btn-electric">Back to Main Page ↗': 'href="index.html" class="btn btn-electric">Back to Clipra ↗',
'<section class="timeline-section">': '<section class="timeline-section" id="architecture">',
}
for old,new in updates.items():
    if old not in u: raise ValueError('Missing updates text: '+old[:80])
    u = u.replace(old,new)
u = u.replace('  </style>', '''
    :root { --text-muted: #94A3B8; --text-dim: #94A3B8; }
    :focus-visible { outline: 2px solid var(--accent-teal); outline-offset: 4px; }
    .nav-link, .filter-btn { min-height: 44px; display: inline-flex; align-items: center; }
    @media (max-width: 700px) {
      .nav-wrapper { height: auto; min-height: 74px; flex-wrap: wrap; padding-block: 12px; gap: 12px; }
      .nav-menu { display: flex; order: 3; width: 100%; justify-content: center; gap: 28px; }
    }
    @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } *, *::before, *::after { animation: none !important; transition: none !important; } }
  </style>''')
p.write_text(u, encoding='utf-8')

# This file was an identical landing-page preview; keep the two versions in sync.
Path('clipra-complete-preview.html').write_text(s, encoding='utf-8')
print('Updated landing page, matching preview, and roadmap.')
