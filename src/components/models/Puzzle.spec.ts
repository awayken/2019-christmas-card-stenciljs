import Answer from './Answer';
import Clue from './Clue';
import CluePosition, { ClueDirection } from './CluePosition';
import Coordinate from './Coordinate';
import Puzzle from './Puzzle';

describe('Puzzle', () => {
  it('creates', () => {
    const clue1 = new Clue('clue1', 'What is this answer?', ['?']);
    const pos1 = new CluePosition(clue1, 1, ClueDirection.Across, new Coordinate(0, 0));
    const spec = new Puzzle(1, 1, [pos1]);

    expect(spec).toBeTruthy();
  });

  it('add answer', () => {
    const clue1 = new Clue('clue1', 'What is this answer?', ['?']);
    const pos1 = new CluePosition(clue1, 1, ClueDirection.Across, new Coordinate(0, 0));
    const spec = new Puzzle(1, 1, [pos1]);

    expect(spec.answers.size).toBe(0);

    const answer1 = new Answer('clue1');
    answer1.value = ['A'];

    spec.addAnswer(answer1);

    expect(spec.answers.size).toBe(1);
    expect(spec.answers.get('clue1')).toBe(answer1);
  });

  it('check puzzle', () => {
    const clue1 = new Clue('clue1', 'What is this answer?', ['?']);
    const pos1 = new CluePosition(clue1, 1, ClueDirection.Across, new Coordinate(0, 0));
    const spec = new Puzzle(1, 1, [pos1]);

    expect(spec.checkPuzzle()).toBe(false);

    const answer = new Answer('clue1');
    answer.value = ['A'];
    spec.addAnswer(answer);

    expect(spec.checkPuzzle()).toBe(false);

    answer.value = ['?'];
    spec.addAnswer(answer);

    expect(spec.checkPuzzle()).toBe(true);
  });
});
