import React from 'react';
import { shape, string, number } from 'prop-types';

import itemFormat from './formatter';
import Style from './ProductItemDetail.style';
import info from './data';

function ProductItemDetail({ item }) {
  const {
    title,
    priceSymbol,
    priceAmount,
    priceDecimals,
    condition,
    picture,
    description,
    soldQuantity,
  } = itemFormat(item);


  return (
    <Style.Container>
      <Style.DescriptionContent>
        <Style.ImageProduct src={picture} alt={title} />
        <Style.TitleLabel>
          {info.titleLabel}
        </Style.TitleLabel>
        <Style.Description dangerouslySetInnerHTML={{ __html: description }}>
        </Style.Description>
      </Style.DescriptionContent>
      <Style.PriceContent>
        <Style.Information>
          {info.labelContition(condition, soldQuantity)}
        </Style.Information>
        <Style.Title>
          {title}
        </Style.Title>
        <Style.Price>
          <Style.PriceAmount>
            {`${priceSymbol} ${priceAmount}`}
          </Style.PriceAmount>
          <Style.PriceDecimals>
            {priceDecimals}
          </Style.PriceDecimals>
        </Style.Price>
          <Style.SalleButton>{info.buttonLabel}</Style.SalleButton>
      </Style.PriceContent>
    </Style.Container>
  );  
}

ProductItemDetail.propTypes = {
  item: shape({
    id: string,
    title: string,
    price: shape({
      currency: string,
      amount: number,
      decimals: number,
    }),
    picture: string,
  }),
};

ProductItemDetail.defaulfProps = {
  item: {},
};

export default ProductItemDetail;
