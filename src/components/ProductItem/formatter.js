
const itemFormat = (item) => ({
  ...item,
  freeShipping: item.free_shipping,
});

export default itemFormat;
