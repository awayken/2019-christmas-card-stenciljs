import { Component, h, Prop, State } from '@stencil/core';

import CluePosition, { ClueDirection } from '../models/CluePosition';

@Component({
  tag: 'xword-puzzle',
  styleUrl: 'xword-puzzle.css',
  shadow: true
})
export class CrosswordPuzzle {
  @Prop() height: number = 50;
  @Prop() width: number = 50;
  @Prop() squares: CluePosition[];

  @State() clues: object = {};
  @State() invalid: object = {};
  @State() answers: object = {};

  async componentWillLoad() {
    const answers = {};
    const invalids = {};
    const clues = {};

    for (let square of this.squares) {
      invalids[square.clue.id] = null;
      answers[square.clue.id] = '';
      clues[square.clue.id] = square.clue;
    }

    this.answers = answers;
    this.invalid = invalids;
    this.clues = clues;
  }

  validateClue(event: CustomEvent, answerKey: string) {
    const { squareIndex, squareValue } = event.detail;
    const answers = { ...this.answers };
    const invalid = { ...this.invalid };
    const currentAnswer = answers[answerKey];

    const answerArray = currentAnswer.split('');
    answerArray[squareIndex] = squareValue;

    answers[answerKey] = answerArray.join('');
    this.answers = answers;

    invalid[answerKey] = this.clues[answerKey].checkAnswer();
    this.invalid = invalid;
  }

  render() {
    const styles = {
      '--columns': '10',
      '--rows': '6',
      '--primary-background': '#000',
      '--width': '420px'
    };

    // TODO: handle autofocus
    return (
      <div class="puzzle" style={styles}>
        {this.squares.map(square => <xword-clue
          column={square.start.column}
          invalid={this.invalid[square.clue.id]}
          isDown={square.direction === ClueDirection.Down}
          length={square.clue.size}
          onSquareUpdate={ev => { this.validateClue(ev, square.clue.id) }}
          row={square.start.row}
          value={this.answers[square.clue.id]}
        ></xword-clue>)}
      </div>
    );
  }
}
