import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'xword-clue',
  styleUrl: 'xword-clue.css',
  shadow: true
})
export class CrosswordClue {
  squares: HTMLInputElement[];

  @Prop() autofocus: boolean = false;
  @Prop() column: number = 1;
  @Prop() invalid: boolean = false;
  @Prop() isDown: boolean = false;
  @Prop() length: number;
  @Prop() row: number = 1;
  @Prop() squareSize: number = 40;
  @Prop() value: string = '';

  @Event() squareUpdate: EventEmitter;

  connectedCallback() {
    // create internal array of squares
  }

  nextSquare(target, currentIndex) {
    if (this.value.length === this.length) {
      // next clue
    }

    let nextIndex = currentIndex + 1;

    if (nextIndex >= this.length) {
      nextIndex = 0;
    }

    this.squares[currentIndex]['$elm$'].value = target.value;
    this.squares[nextIndex]['$elm$'].focus();
  }

  getSquares() {
    this.squares = [];
    const values = this.value.split('') || [];

    for (let i = 0; i < this.length; i++) {
      this.squares.push(
        <input
          autofocus={this.autofocus && i === 0}
          class="clue__box"
          maxlength={1}
          onKeyUp={e => {
            if (this.squareUpdate && e.key.length === 1) {
              this.squareUpdate.emit({
                squareIndex: i,
                squareValue: e.key
              });
            }

            this.nextSquare(e.currentTarget, i);
          }}
          value={values[i] || ''}
        />
      );
    }

    return this.squares;
  }

  render() {
    const fontSize = this.squareSize / 30;

    const styleRules = {
      '--column': `${this.column || 1}`,
      '--row': `${this.row || 1}`,
      '--square-size': `${this.squareSize}px`,

      fontSize: `${fontSize}em`
    };

    if (Number(this.length) === 0) {
      return null;
    }

    let className = 'clue';

    if (this.isDown) {
      className += ' clue--down';
    } else {
      className += ' clue--across';
    }

    if (this.invalid) {
      className += ' clue--invalid';
    }

    return (
      <div class={className} style={styleRules}>
        {...this.getSquares()}
      </div>
    );
  }
}
