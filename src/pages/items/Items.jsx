import React from 'react';
import { shape, arrayOf, string } from 'prop-types';

import getInitialProps from '../../server/Items';
import MainTemplate from '../../template/MainTemplate';
import ProductItem from '../../components/ProductItem';
function Items(props) {
  const { items } = props;

  return (
    <MainTemplate>
      {items.map((item) => {
        return (<ProductItem key={item.id} item={item} />)
      })}
    </MainTemplate>
  );
}

Items.propTypes = {
  items: arrayOf(shape({})),
  categories: arrayOf(string),
};

Items.defaulfProps = {
  items: [],
  categories: [],
};

Items.getInitialProps = getInitialProps;

export default Items;
