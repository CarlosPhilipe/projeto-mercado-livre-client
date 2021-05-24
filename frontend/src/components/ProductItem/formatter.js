import { symbols } from '../../helpers/currency';

const itemFormat = (item) => ({
  ...item,
  freeShipping: item.free_shipping,
  priceSymbol: symbols[item.price.currency],
  price: Number(`${item.price.amount}.${item.price.decimals}`).toLocaleString(),
});


export default itemFormat;
