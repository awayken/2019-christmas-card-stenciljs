import { newE2EPage } from '@stencil/core/testing';

describe('app-puzzle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-puzzle></app-puzzle>');

    const element = await page.find('app-puzzle');
    expect(element).toHaveClass('hydrated');
  });

  it('displays the specified name', async () => {
    const page = await newE2EPage({ url: '/profile/joseph' });

    const profileElement = await page.find('app-root >>> app-puzzle');
    const element = profileElement.shadowRoot.querySelector('div');
    expect(element.textContent).toContain('Hello! My name is Joseph.');
  });

  // it('includes a div with the class "app-puzzle"', async () => {
  //   const page = await newE2EPage({ url: '/profile/joseph' });

  // I would like to use a selector like this above, but it does not seem to work
  //   const element = await page.find('app-root >>> app-puzzle >>> div');
  //   expect(element).toHaveClass('app-puzzle');
  // });
});
