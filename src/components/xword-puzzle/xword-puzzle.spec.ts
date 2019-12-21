import { CrosswordPuzzle as Puzzle } from './xword-puzzle';

describe('puzzle', () => {
  it('builds', () => {
    expect(new Puzzle()).toBeTruthy();
  });
});
