export const formatingAmount = (amount) => (
  `${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} `
);
