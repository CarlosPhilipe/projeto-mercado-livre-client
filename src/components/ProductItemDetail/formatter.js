import { symbols, formatDecimals } from '../../helpers/currency';

const itemFormat = (item) => ({
  ...item,
  soldQuantity: item.sold_quantity,
  priceSymbol: symbols[item.price.currency],
  priceDecimals: formatDecimals(item.price.decimals),
  priceAmount: item.price.amount.toLocaleString(),
});


export default itemFormat;
