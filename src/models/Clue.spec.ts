import Answer from './Answer';
import Clue from './Clue';

describe('Clue', () => {
  it('creates', () => {
    const spec = new Clue('clue1', 'A sugar-free, baby-friendly sucker?', ['t', 'h', 'u', 'm', 'b']);

    expect(spec).toBeTruthy();
    expect(spec.id).toBe('clue1');
    expect(spec.question).toBe('A sugar-free, baby-friendly sucker?');
    expect(spec.size).toBe(5);
    expect(spec.answer).toBeUndefined();
  });

  it('checksAnswer', () => {
    const spec = new Clue('clue1', 'A sugar-free, baby-friendly sucker?', ['t', 'h', 'u', 'm', 'b']);
    const answer = new Answer('clue1');

    answer.value = ['b', 'a', 'd'];
    expect(spec.checkAnswer(answer)).toBe(false);

    answer.value = ['t', 'h', 'u', 'm', 'b'];
    expect(spec.checkAnswer(answer)).toBe(true);
  })
});
