import React from 'react';
import { shape, } from 'prop-types';

import MainTemplate from '../../template/MainTemplate';
import ProductItemDetail from '../../components/ProductItemDetail';
import getInitialProps from '../../server/ItemDetail';

function ItemDetail(props) {
  const { item } = props;

  return (
    <MainTemplate>
      <ProductItemDetail item={item} />
    </MainTemplate>
  );
}

ItemDetail.propTypes = {
  item: shape({}),
}

ItemDetail.getInitialProps = getInitialProps;

export default ItemDetail;
