export default {
  title: 'Clue',
};

export const normal = () => `
  <xword-clue autofocus length="5"></xword-clue>
  <xword-clue length="10"></xword-clue>
  <xword-clue length="6" square-size="60"></xword-clue>
  <xword-clue length="6" is-down></xword-clue>
`;

export const hasValue = () => `
  <xword-clue length="6" value=""></xword-clue>
  <xword-clue length="6" value="rausch"></xword-clue>
  <xword-clue length="6" value="ra   h"></xword-clue>
  <xword-clue length="2" value="rausch"></xword-clue>
`;

export const hasBadValue = () => `
  <xword-clue invalid length="6" value=""></xword-clue>
  <xword-clue invalid length="6" value="rausch"></xword-clue>
  <xword-clue invalid length="6" value="ra   h"></xword-clue>
  <xword-clue invalid length="2" value="rausch"></xword-clue>
`;
