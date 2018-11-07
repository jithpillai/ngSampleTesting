import { AppPage } from './app.po';
import { by, element } from 'protractor';
describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to ngTestingDemo!');
  });
  it('Should have P Tag with Text', () => {
    const text = element(by.css('.csscolor')).getText();
    expect(text).toBe("Hello!");
  });
  it('UL Tag should be present', () => {
    const c = element(by.tagName('ul')).isPresent();
    expect(c).toBeTruthy();
  });
  
  it('Count No of P Tags', () => {
    const c = element.all(by.tagName('p')).count();
    expect(c).toEqual(1);
  });

  it('Should Check First List Element', () => {
    const c = element.all(by.tagName('li')).first();
    expect(c.getText()).toEqual('Animal');
  });
});
