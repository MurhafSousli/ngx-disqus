import { NgxDisqusDemoPage } from './app.po';

describe('ngx-disqus-demo App', () => {
  let page: NgxDisqusDemoPage;

  beforeEach(() => {
    page = new NgxDisqusDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
