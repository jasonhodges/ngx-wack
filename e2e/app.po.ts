import { browser, by, element } from 'protractor';

export class NgxWackPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('wack-root h1')).getText();
  }
}
