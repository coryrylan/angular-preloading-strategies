import { PreloadingStrategiesPage } from './app.po';

describe('preloading-strategies App', () => {
  let page: PreloadingStrategiesPage;

  beforeEach(() => {
    page = new PreloadingStrategiesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
