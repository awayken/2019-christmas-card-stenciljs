import Coordinate from './Coordinate';

describe('Coordinate', () => {
  it('creates', () => {
    const spec = new Coordinate(10, 20);

    expect(spec).toBeTruthy();
    expect(spec.x).toBe(10);
    expect(spec.y).toBe(20);
  });

  it('locks x,y', () => {
    const spec = new Coordinate(10, 20);

    expect(spec.x).toBe(10);
    expect(spec.y).toBe(20);

    spec.x = 20;
    spec.y = 10;

    expect(spec.x).toBe(10);
    expect(spec.y).toBe(20);
  });
});
