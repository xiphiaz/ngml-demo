export class NgmlDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ngml-demo-app h1')).getText();
  }
}
