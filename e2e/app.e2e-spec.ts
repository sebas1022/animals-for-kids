import { AnimalsForKidsPage } from './app.po';

describe('animals-for-kids App', () => {
  let page: AnimalsForKidsPage;

  beforeEach(() => {
    page = new AnimalsForKidsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
