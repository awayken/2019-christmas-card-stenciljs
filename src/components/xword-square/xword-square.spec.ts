import { CrosswordSquare as Square } from './xword-square';

describe('square', () => {
  it('builds', () => {
    expect(new Square()).toBeTruthy();
  });
});
