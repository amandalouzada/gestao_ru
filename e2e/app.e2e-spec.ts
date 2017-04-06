import { GestaoRuPage } from './app.po';

describe('gestao-ru App', () => {
  let page: GestaoRuPage;

  beforeEach(() => {
    page = new GestaoRuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
