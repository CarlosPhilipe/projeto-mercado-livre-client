const titleLabel = 'Descrição do produto';
const buttonLabel = 'Comprar';

const labelContition = (condition, soldQuantity) => {
  let label = condition ? condition : '';
  label += soldQuantity !== 0 ? ` - ${soldQuantity} vendidos` : '';
  return label;
}

export default {
  buttonLabel,
  titleLabel,
  labelContition,
};