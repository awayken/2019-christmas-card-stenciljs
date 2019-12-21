import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'xword-square',
  styleUrl: 'xword-square.css',
  shadow: true
})
export class CrosswordSquare {
  @Prop() value: string;
  @Prop() status: string;

  getStatusClass() {
    const whitelist = ['active', 'wrong', 'selected'];

    if (whitelist.includes(this.status)) {
      return this.status;
    }

    return '';
  }

  render() {
    const formattedValue = (this.value || '').toUpperCase();

    return (
      <input class={`square ${this.getStatusClass()}`} maxlength="1" value={formattedValue} />
    );
  }
}
