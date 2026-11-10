from pathlib import Path
from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright
for file in ['index.html','updates.html','clipra-complete-preview.html']:
 soup=BeautifulSoup(Path(file).read_text(encoding='utf-8'),'html.parser')
 ids=[n['id'] for n in soup.select('[id]')]
 assert len(ids)==len(set(ids)), 'Duplicate IDs'
 broken=[]
 for a in soup.select('a[href]'):
  href=a['href']
  if href=='#' or ':' in href: continue
  target,_,fragment=href.partition('#')
  target=Path(target or file)
  if not target.exists(): broken.append(href); continue
  if fragment and not BeautifulSoup(target.read_text(encoding='utf-8'),'html.parser').find(id=fragment): broken.append(href)
 print(file, 'broken targets:',broken)
 assert not broken
with sync_playwright() as p:
 browser=p.chromium.launch(headless=True)
 page=browser.new_page(viewport={'width':1440,'height':1000},reduced_motion='reduce')
 page.goto(Path('index.html').resolve().as_uri())
 page.screenshot(path='.review/hero-desktop.png')
 page.set_viewport_size({'width':375,'height':812})
 page.evaluate('scrollTo({top:0,behavior:"instant"})')
 page.screenshot(path='.review/hero-mobile.png')
 page.locator('#transformer').screenshot(path='.review/transformer-mobile.png')
 page.locator('#pricing').screenshot(path='.review/pricing-mobile.png')
 page.locator('#footerShortcutsLink').click()
 assert page.locator('#shortcutModal').is_visible()
 assert page.locator('#closeModalBtn').evaluate('e=>e===document.activeElement')
 page.keyboard.press('Tab')
 assert page.locator('#closeModalBtn').evaluate('e=>e===document.activeElement')
 page.keyboard.press('Escape')
 assert page.locator('#shortcutModal').is_hidden()
 assert page.locator('#footerShortcutsLink').evaluate('e=>e===document.activeElement')
 page.evaluate('() => { navigator.clipboard.writeText = async () => { throw new Error("blocked"); }; }')
 page.locator('#copyTransBtn').click()
 assert 'Could not copy' in page.locator('#copyBtnText').inner_text()
 print('Shortcut focus and failed-copy feedback: passed')
 page.evaluate('document.documentElement.style.fontSize="200%"')
 print('200% root font overflow:',page.evaluate('document.documentElement.scrollWidth>innerWidth'))
 browser.close()

