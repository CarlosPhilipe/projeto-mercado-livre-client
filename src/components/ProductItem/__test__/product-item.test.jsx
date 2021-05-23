import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductItem from '../ProductItem';
import productItemMock from '../__mock__/product-item';

describe('<ProductItem />', () => {
  test('should render the load component', async () => {
    const item = productItemMock.validMock;
    const productAlt = item.title;
    render(<ProductItem item={item} />);
    const productImage = await screen.getByAltText(productAlt);
    expect(productImage).toBeInTheDocument();
  });

  test('should render the free shipping', async () => {
    const item = productItemMock.validMock;
    render(<ProductItem item={item} />);
    const freeShippingImage = await screen.queryByAltText('Possui frete grátis');
    expect(freeShippingImage).toBeInTheDocument();
  });

  test('should not render the free shipping', async () => {
    let item = productItemMock.validMock;

    item.free_shipping = false;

    render(<ProductItem item={item} />);

    const productImage = await screen.queryByAltText('Possui frete grátis');
    expect(productImage).not.toBeInTheDocument();
  });
});
