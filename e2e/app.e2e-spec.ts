import { HackschoolAngularPage } from './app.po';

describe('hackschool-angular App', () => {
  let page: HackschoolAngularPage;

  beforeEach(() => {
    page = new HackschoolAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
