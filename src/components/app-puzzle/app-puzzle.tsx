import { Component, Prop, h, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';

import CluePosition, { ClueDirection } from '../models/CluePosition';

@Component({
  tag: 'app-puzzle',
  styleUrl: 'app-puzzle.css',
  shadow: true
})
export class AppPuzzle {
  @Prop() match: MatchResults;

  @State() squares: CluePosition[];

  async componentWillLoad() {
    this.squares = [
      new CluePosition('rauschword', 'Title 1', 'rauschword', 0, ClueDirection.Across, 1, 2),
      new CluePosition('puzzle', 'Title 2', 'puzzle', 1, ClueDirection.Down, 3, 1)
    ]
  }

  render() {
    if (this.match && this.match.params.level) {
      return (
        <div class="app-puzzle">
          <p>
            Puzzle level: {this.match.params.level}.
          </p>

          {/* Give the xword-puzzle its data and maybe some other initialization details. */}
          <xword-puzzle squares={this.squares}></xword-puzzle>
        </div>
      );
    }

    return (
      <app-levels></app-levels>
    );
  }
}
