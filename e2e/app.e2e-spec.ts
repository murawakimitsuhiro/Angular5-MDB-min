import { Angular4DockerMinPage } from './app.po';

describe('angular4-docker-min App', () => {
  let page: Angular4DockerMinPage;

  beforeEach(() => {
    page = new Angular4DockerMinPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
