import { FirstProjectTemplatePage } from './app.po';

describe('FirstProject App', function() {
  let page: FirstProjectTemplatePage;

  beforeEach(() => {
    page = new FirstProjectTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
