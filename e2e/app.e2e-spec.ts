import { AstiRecruitmentV2Page } from './app.po';

describe('asti-recruitment-v2 App', () => {
  let page: AstiRecruitmentV2Page;

  beforeEach(() => {
    page = new AstiRecruitmentV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
