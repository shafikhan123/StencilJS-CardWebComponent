import { newSpecPage } from '@stencil/core/testing';
import { CardComponent } from './card-component';

describe('card-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [CardComponent],
      html: '<card-component></crad-component>',
    });
    expect(root).toEqualHtml(`
      <card-component>
        <mock:shadow-root>
        <div class="card__wrapper">
        <div class="card__header">
          <slot name="header"></slot>
        </div>
        <div class="card-body__content">
          <div class="card__subtitle">
            <slot name="subtitle"></slot>
          </div>
          <div class="card__title">
            <slot name="title"></slot>
          </div>
          <div class="card__body">
            <slot name="body"></slot>
          </div>
        </div>
      </div>
        </mock:shadow-root>
      </card-component>
    `);
  });
});
