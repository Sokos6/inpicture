import { InpicturePage } from './app.po';

describe('inpicture App', () => {
  let page: InpicturePage;

  beforeEach(() => {
    page = new InpicturePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
