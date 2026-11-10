from pathlib import Path
import re

p=Path('index.html')
s=p.read_text(encoding='utf-8')
# Keep the demos visually quiet and avoid implying Base64 is encryption.
for token in ['🎨 ', '🔗 ', '⚡ ', '✉️ ', '📦 ', '🧹 ', '🔤 ', '📄 ', '🔒 ', '⌨️ ', '📐 ', '🖼️ ', '📚 ', '📁 ', '🛡️ ']:
    s=s.replace(token,'')
s=s.replace('the clipboard that organizes itself with zero effort','keep your project notes together')
s=s.replace('The Clipboard That Organizes Itself With Zero Effort','Keep Your Project Notes Together')
s=s.replace('<b>Clipra</b> is built for <i>maximum</i> power and speed.','<b>Project notes</b> for the <i>next</i> release.')
s=s.replace('Clipra is built for maximum power and speed.','Project notes for the next release.')
s=s.replace('clipra-private-icloud-token-2026','hello clipra')
s=s.replace('Y2xpcHJhLXByaXZhdGUtaWNsb3VkLXRva2VuLTIwMjY=','aGVsbG8gY2xpcHJh')
s=s.replace('Paste Stack ⌘⌥V','Paste Stack on Mac')
s=s.replace('Clipra Instant Transformation','Transformation preview')
s=s.replace('Source: Safari (Browser Copy)','Sample link')
s=s.replace('● Dirty Input','Before').replace('● Clean Output','After')
s=s.replace('id="copyBtnText"','id="copyBtnText" aria-live="polite"')
s=s.replace('<div class="modal-overlay" id="shortcutModal">','<div class="modal-overlay" id="shortcutModal" role="dialog" aria-modal="true" aria-labelledby="shortcutTitle">')
s=s.replace('<h3 style="font-size: 18px; font-weight: 700; color: #FFF;">Clipra Shortcuts Reference</h3>','<h3 id="shortcutTitle" style="font-size: 18px; font-weight: 700; color: #FFF;">Planned Mac shortcuts</h3>')
# Shortcuts not specified in the source brief should not be promised.
s=re.sub(r'        <div class="shortcut-row">\s*<span[^>]*>(Open Text Transformer|Power Search History|Sequential Paste Stack|Pin Item to Board)</span>.*?</div>', '', s, flags=re.S)
s=s.replace("const openModal = () => { modal.classList.add('active'); };\n      const closeModal = () => { modal.classList.remove('active'); };", """let previousFocus;
      const openModal = () => {
        previousFocus = document.activeElement;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
      };
      const closeModal = () => {
        if (!modal.classList.contains('active')) return;
        modal.classList.remove('active');
        document.body.style.overflow = '';
        previousFocus?.focus();
      };
      modal.addEventListener('keydown', (event) => {
        if (event.key === 'Tab') { event.preventDefault(); closeBtn.focus(); }
      });""")
marker="      // Responsive navigation: close on selection, outside click, Escape, or resize."
s=s.replace(marker,"""      // These are single-selection button groups, not ARIA tab panels.
      ['heroFilterTabs', 'ruleTriggers', 'transTabs', 'usecaseTabs', 'billingToggle'].forEach(id => {
        const buttons = document.querySelectorAll(`#${id} button`);
        buttons.forEach(button => {
          button.setAttribute('aria-pressed', String(button.classList.contains('active')));
          button.addEventListener('click', () => buttons.forEach(item => {
            item.setAttribute('aria-pressed', String(item === button));
          }));
        });
      });

"""+marker)
p.write_text(s,encoding='utf-8')
Path('clipra-complete-preview.html').write_text(s,encoding='utf-8')
p=Path('updates.html')
u=p.read_text(encoding='utf-8')
for token in ['🤖 ', '👥 ', '⚡ ', '🔌 ', '📱 ']: u=u.replace(token,'')
u=u.replace("filterBtns.forEach(btn => {", "filterBtns.forEach(btn => {\n      btn.setAttribute('aria-pressed', String(btn.classList.contains('active')));")
u=u.replace("filterBtns.forEach(b => b.classList.remove('active'));", "filterBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });")
u=u.replace("btn.classList.add('active');", "btn.classList.add('active');\n        btn.setAttribute('aria-pressed', 'true');")
p.write_text(u,encoding='utf-8')
print('Polished demo labels, button states, and shortcut dialog.')
