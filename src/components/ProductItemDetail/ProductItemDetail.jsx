import React from 'react';

import itemFormat from './formatter';
import Style from './ProductItemDetail.style';

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
        <Style.ImageProduct src={picture} />
        <Style.TitleLabel>
          Descrioção do produto
        </Style.TitleLabel>
        <Style.Description
          dangerouslySetInnerHTML={{ __html: description }}
        >
        </Style.Description>
      </Style.DescriptionContent>
      <Style.PriceContent>
        <Style.Information>
          {condition && (`${condition} - `)}
          {soldQuantity && (`${soldQuantity} vendidos`)}
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
          <Style.SalleButton>Comprar</Style.SalleButton>
      </Style.PriceContent>
    </Style.Container>
  );  
}

export default ProductItemDetail;
