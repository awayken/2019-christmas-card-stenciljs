import Clue from './Clue';
import CluePosition, { ClueDirection } from './CluePosition';
import Coordinate from './Coordinate';

describe('CluePosition', () => {
  it('creates', () => {
    const clue1 = new Clue('clue1', 'What is this answer?', ['?']);
    const coordinate = new Coordinate(0, 0);
    const spec = new CluePosition(clue1, 1, ClueDirection.Across, coordinate);

    expect(spec).toBeTruthy();
  });
});
