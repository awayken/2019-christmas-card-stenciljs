import Answer from './Answer';

describe('Answer', () => {
  it('creates', () => {
    const spec = new Answer('clue1');

    expect(spec).toBeTruthy();
    expect(spec.value).toBeDefined();
    expect(spec.toString()).toBe('');
  });

  it('renders value', () => {
    const spec = new Answer('clue1');
    spec.value = ['t', 'h', 'u', 'm', 'b'];
    expect(spec.toString()).toBe('thumb');
  });
});
