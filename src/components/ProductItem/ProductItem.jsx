import React from 'react';
import { shape, bool, string, number } from 'prop-types';

import itemFormat from './formatter';

import Style from './ProductItem.style';
import info from './data';

function ProductItem(props) {
  const { item } = props;
  const {
    id,
    title,
    price,
    priceSymbol,
    picture,
    freeShipping,
  } = itemFormat(item);

  return(
    <Style.Container>
      <Style.Link href={`/items/${id}`}>
        <Style.Image src={picture} alt={info.productImageAlt} />
      </Style.Link>
      <Style.DescriptionContainer>
        <Style.HeaderContainer>
          <Style.Price>
            {`${priceSymbol} ${price}`}
          </Style.Price>
          {freeShipping && (
            <Style.FreeShippingImage
              src={info.freeShipping.src}
              alt={info.freeShipping.alt}
            />
          )}
        </Style.HeaderContainer>
        <Style.Title>
          {title}
        </Style.Title>
      </Style.DescriptionContainer>
    </Style.Container>
  );
}

ProductItem.propTypes = {
  item: shape({
    id: string,
    title: string,
    price: shape({
      currency: string,
      amount: number,
      decimals: number,
    }),
    picture: string,
    freeShipping: bool,
  }),
};

ProductItem.defaulfProps = {
  item: {},
};

export default ProductItem;
