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

  constructor(id: string, question: string, answer: string, index: number, direction: ClueDirection, column: number, row: number) {
    this.clue = new Clue(id, question, answer.split(''));
    this.index = index;
    this.direction = direction;
    this.start = new Coordinate(column, row);
  }
}
