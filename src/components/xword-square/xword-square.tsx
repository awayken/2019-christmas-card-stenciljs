import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'xword-square',
  styleUrl: 'xword-square.css',
  shadow: true
})
export class Square {
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
    // oDoc.focus();
    return (
      <div class={`square ${this.getStatusClass()}`} contentEditable>
        {this.value}
      </div>
    );
  }
}
