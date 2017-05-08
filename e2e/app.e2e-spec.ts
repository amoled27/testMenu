import { DishMenuWebAppPage } from './app.po';

describe('dish-menu-web-app App', function() {
  let page: DishMenuWebAppPage;

  beforeEach(() => {
    page = new DishMenuWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
