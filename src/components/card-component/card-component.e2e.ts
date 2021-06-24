import { newE2EPage, E2EPage } from '@stencil/core/testing';

describe('card-component', () => {
  let page: E2EPage;

  beforeEach(async () => {
    page = await newE2EPage();
  });

  it('should renders', async () => {
    await page.setContent('<card-component></card-component>');
    const element = await page.find('card-component');
    expect(element).toHaveClass('hydrated');
  });

  });
