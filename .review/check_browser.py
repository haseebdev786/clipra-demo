import sys
sys.stdout.reconfigure(encoding='utf-8')
from pathlib import Path
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
 browser=p.chromium.launch(headless=True)
 page=browser.new_page(viewport={'width':1440,'height':1000}, device_scale_factor=1)
 errors=[]
 page.on('pageerror', lambda e: errors.append(str(e)))
 page.goto(Path('index.html').resolve().as_uri())
 page.screenshot(path='.review/desktop.png', full_page=True)
 print('Desktop nav:', page.locator('nav').inner_text())
 print('Desktop overflow:', page.evaluate('document.documentElement.scrollWidth > innerWidth'))
 page.locator('[data-billing="monthly"]').click()
 assert page.locator('#proPriceDisplay').inner_text()=='1.99'
 page.locator('[data-billing="annual"]').click()
 assert page.locator('#proPriceDisplay').inner_text()=='14.99'
 page.locator('[data-trans="urlencode"]').click()
 assert page.locator('#transAfter').inner_text()=='design%20notes%20%26%20colors'
 for case in ['design','market','agency','dev']: page.locator('[data-case="'+case+'"]').click()
 page.locator('.faq-question').nth(1).click()
 assert page.locator('.faq-question').nth(1).get_attribute('aria-expanded')=='true'
 assert page.locator('.faq-answer').nth(0).is_hidden()
 for width,height in [(375,812),(390,844),(768,1024),(900,750),(1024,768),(667,375)]:
  page.set_viewport_size({'width':width,'height':height})
  page.evaluate('scrollTo(0,0)')
  print('Viewport',width,height,'overflow:',page.evaluate('document.documentElement.scrollWidth > innerWidth'))
  if width<=900:
   page.locator('#mobileToggle').click()
   assert page.locator('#primaryNav').is_visible()
   assert page.locator('#mobileToggle').get_attribute('aria-expanded')=='true'
   if width==375: page.screenshot(path='.review/mobile-menu.png')
   page.keyboard.press('Escape')
   assert page.locator('#primaryNav').is_hidden()
   page.locator('#mobileToggle').click()
   page.locator('#primaryNav a').last.click()
   assert page.locator('#primaryNav').is_hidden()
  if width==375: page.screenshot(path='.review/mobile.png',full_page=True)
 page.set_viewport_size({'width':375,'height':812})
 page.evaluate('scrollTo(0,0)')
 page.locator('#mobileToggle').click()
 page.set_viewport_size({'width':1440,'height':1000})
 assert page.locator('#primaryNav').is_visible()
 assert page.locator('#primaryNav').evaluate('e=>getComputedStyle(e).flexDirection')=='row'
 page.set_viewport_size({'width':375,'height':812})
 assert page.locator('#primaryNav').is_hidden()
 page.emulate_media(reduced_motion='reduce')
 assert page.locator('html').evaluate('e=>getComputedStyle(e).scrollBehavior')=='auto'
 page.goto(Path('updates.html').resolve().as_uri())
 page.screenshot(path='.review/roadmap-mobile.png',full_page=True)
 print('Roadmap mobile overflow:',page.evaluate('document.documentElement.scrollWidth > innerWidth'))
 print('Roadmap nav visible:',page.locator('nav').is_visible())
 page.locator('[data-cat="privacy"]').first.click()
 assert page.locator('.timeline-card:visible').count()==1
 print('Runtime errors:',errors)
 assert not errors
 browser.close()
