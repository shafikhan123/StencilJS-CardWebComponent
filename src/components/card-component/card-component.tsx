import { Component, h } from '@stencil/core';

@Component({
  tag: 'card-component',
  styleUrl: 'card-component.scss',
  shadow: true,
})
export class CardComponent {
  render() {
    return (
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
    );
  }
}
