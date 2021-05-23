import styled from 'styled-components';

const Container = styled.div`
  background-color: #FFFFFF;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 16px;
  padding: 32px;
`;

const DescriptionContent = styled.div`
  word-break: 'break-word';
`;

const ImageProduct = styled.img`
  max-width: 680px;
  width: 100%;
  max-height: 680px;
  height: auto;
  object-fit: contain;
  margin: 0 auto;
  margin-bottom: 32px;
`;

const TitleLabel = styled.div`
  font-size: 28px;
  padding-bottom: 32px;
`;

const Description = styled.div`
  font-size: 16px;
  color: #999999;

  > p {}
`;

const PriceContent = styled.div`
  padding-left: 32px;
`;

const Information = styled.div`
  padding-bottom: 16px;
  color: #999999;
`;

const Title = styled.div`
  font-size: 24px;
  padding-bottom: 32px;
`;

const Price = styled.div`
  font-size: 46px;
  padding-bottom: 32px;
  display: flex;
`;

const PriceAmount = styled.div`
  font-size: 46px;
  padding-right: 8px;
`;

const PriceDecimals = styled.div`
  font-size: 32px;
  padding-top: 4px;
`;

const SalleButton = styled.button`
  color: #FFFFFF;
  width: 100%;
  padding: 8px 0;
  background-color: #3483FA;
  font-size: 18px;
  border: 0;
  border-radius: 4px;
`;


export default {
  Container,
  ImageProduct,
  DescriptionContent,
  TitleLabel,
  Description,
  PriceContent,
  Information,
  Price,
  PriceAmount,
  PriceDecimals,
  Title,
  SalleButton,
};