export default class Coordinate {
  readonly column: number;
  readonly row: number;

  constructor(column: number, row: number) {
    this.column = column;
    this.row = row;
  }
}
