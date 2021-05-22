import React from 'react';
// import { shape, arrayOf, string } from 'prop-types';

import MainTemplate from '../../template/MainTemplate';
// import ProductItem from '../../components/ProductItem';
import getInitialProps from '../../server/ItemDetail';

import { useRouter } from 'next/router'

function ItemDetail() {
  // const router = useRouter();

  return (
    <MainTemplate><div /></MainTemplate>
  );
}

ItemDetail.getInitialProps = getInitialProps;

export default ItemDetail;
