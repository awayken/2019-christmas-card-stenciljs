import { Component, h, Prop, State } from '@stencil/core';

// Abstract behind API call or something
// import Puzzle from '../../models/Puzzle';


@Component({
  tag: 'xword-puzzle',
  styleUrl: 'xword-puzzle.css',
  shadow: true
})
export class CrosswordPuzzle {
  @Prop() difficulty: number = 1;
  @Prop() height: number = 50;
  @Prop() width: number = 50;

  @State() squares: string[] = [];

  async componentWillLoad() {
    // const response = await fetch('/some-data.json');
    // const data = await response.json();
    // this.squares = data;
  }

  getSquares() {
    const squares = [];

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        // either full with null or fill with <xword-square>
        squares[i + j] = <xword-square value={`${i + j}`}></xword-square>;
      }
    }

    return squares;
  }

  render() {
    return (
      <div class="puzzle">
        <h1>Puzzle</h1>

        {...this.getSquares()}
      </div>
    );
  }
}
