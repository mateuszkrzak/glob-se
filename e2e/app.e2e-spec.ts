import { GlobSePage } from './app.po';

describe('glob-se App', function() {
  let page: GlobSePage;

  beforeEach(() => {
    page = new GlobSePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
