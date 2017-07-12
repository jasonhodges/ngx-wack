import { NgxWackPage } from './app.po';

describe('ngx-wack App', () => {
  let page: NgxWackPage;

  beforeEach(() => {
    page = new NgxWackPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to wack!!');
  });
});
