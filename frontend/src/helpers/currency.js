const symbols = {
  'ARS': '$',
  'BRS': 'R$',
  'USD': '$',
};

const formatDecimals= (decimals) => {
  if (decimals > 0) {
    if (String(decimals).length === 2) {
      return decimals;
    }
    return decimals * 10;
  }
  return '00';
};

export {
  symbols,
  formatDecimals,
};
