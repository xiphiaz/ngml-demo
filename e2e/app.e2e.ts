import { NgmlDemoPage } from './app.po';

describe('ngml-demo App', function() {
  let page: NgmlDemoPage;

  beforeEach(() => {
    page = new NgmlDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ngml-demo works!');
  });
});
