import currencyFormat from '../../helpers/currency';

const itemFormat = (item) => ({
  ...item,
  freeShipping: item.free_shipping,
  price: currencyFormat({
    value: Number(`${item.price.amount}.${item.price.decimals}`),
    currency: item.price.currency,
  }),
});


export default itemFormat;
