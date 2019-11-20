export default {
  title: 'Square',
};

export const normal = () =>
         `
         <xword-square></xword-square>
         <xword-square value="X"></xword-square>
         `;

export const isActive = () =>
         `
         <xword-square status="active"></xword-square>
         <xword-square status="active" value="X"></xword-square>
         `;

export const isSelected = () =>
         `
         <xword-square status="selected"></xword-square>
         <xword-square status="selected" value="X"></xword-square>
         `;

export const isWrong = () => `
  <xword-square status="wrong"></xword-square>
  <xword-square status="wrong" value="X"></xword-square>
`;
