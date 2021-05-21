import React from 'react';

import { useRouter } from 'next/router'

function Product() {
  const router = useRouter();

  console.log(router);

  return (
    <div>Product</div>
  );
}

export default Product;
