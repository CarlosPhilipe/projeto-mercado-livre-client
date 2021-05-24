import React from 'react';
import { shape, arrayOf, string } from 'prop-types';

import getInitialProps from '../../server/Items';
import MainTemplate from '../../template/MainTemplate';
import BreadCrumb from '../../components/BreadCrumb';
import ProductListItems from '../../components/ProductListItems';
function Items(props) {
  const { items, categories } = props;
  if (!items) {
    return (<MainTemplate />);
  }

  return (
    <MainTemplate>
      <BreadCrumb categories={categories} />
      <ProductListItems items={items} />
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
