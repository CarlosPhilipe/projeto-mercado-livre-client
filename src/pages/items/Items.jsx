import React from 'react';

import { useRouter } from 'next/router'

function Items() {
  const router = useRouter();

  console.log(router);

  return (
    <div>Items</div>
  );
}

export default Items;
