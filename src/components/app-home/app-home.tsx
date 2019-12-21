import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {
  @State() invalid = {
    'rauschword': null,
    'puzzle': null
  };

  @State() answers = {
    'rauschword': 'R  SCHW RD',
    'puzzle': 'P ZZL '
  };

  validateClue(event: CustomEvent, answerKey) {
    const { squareIndex, squareValue } = event.detail;
    const answers = { ...this.answers };
    const invalid = { ...this.invalid };
    const currentAnswer = answers[answerKey];

    const answerArray = currentAnswer.split('');
    answerArray[squareIndex] = squareValue;

    answers[answerKey] = answerArray.join('');
    this.answers = answers;

    invalid[answerKey] = this.answers[answerKey].toLowerCase() !== answerKey.toLowerCase();
    this.invalid = invalid;
  }

  render() {
    return (
      <div class='app-home'>
        <xword-clue
          autofocus
          invalid={this.invalid['rauschword']}
          length={10}
          onSquareUpdate={ev => { this.validateClue(ev, 'rauschword') }}
          value={this.answers['rauschword']}
        ></xword-clue>

        <xword-clue
          invalid={this.invalid['puzzle']}
          isDown
          length={6}
          onSquareUpdate={ev => { this.validateClue(ev, 'puzzle') }}
          value={this.answers['puzzle']}
        ></xword-clue>

        <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
