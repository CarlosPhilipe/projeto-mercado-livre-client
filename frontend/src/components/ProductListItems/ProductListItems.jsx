import React from 'react';
import { shape, bool, string, number, arrayOf } from 'prop-types';

import ProductItem from '../ProductItem';
import Style from './ProductListItems.style';

function ProductListItems({ items }) {
  return (
    <Style.Container role='items'>
      {items.map(item => (<ProductItem key={item.id} item={item} />))}
    </Style.Container>
  );
}

ProductListItems.propTypes = {
  items: arrayOf(shape({
    id: string,
    title: string,
    price: shape({
      currency: string,
      amount: number,
      decimals: number,
    }),
    picture: string,
    freeShipping: bool,
  })),
};

ProductListItems.defaulfProps = {
  items: [],
};

export default ProductListItems;
