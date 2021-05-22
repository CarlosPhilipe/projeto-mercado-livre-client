const symbols = {
  'ARS': 'es-ar',
  'BRS': 'pt-BT',
  'USD': 'en-US',
};

const format = ({ value, currency = 'BRS'}) => (
  Number(value).toLocaleString(symbols[currency], {
    currency: currency,
    style: 'currency',
  }));

export default format;
