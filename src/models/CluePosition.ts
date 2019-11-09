import Clue from './Clue';
import Coordinate from './Coordinate';

export enum ClueDirection {
  Across,
  Down
}

export default class CluePosition {
  readonly clue: Clue;
  readonly index: number;
  readonly direction: ClueDirection;
  readonly start: Coordinate;

  constructor(clue: Clue, index: number, direction: ClueDirection, start: Coordinate) {
    this.clue = clue;
    this.index = index;
    this.direction = direction;
    this.start = start;
  }
}
