import styled from 'styled-components';

const Container = styled.div`
  background-color: #FFFFFF;
  padding: 16px 0;
  display: flex;
  color: #333333;
`;

const DescriptionContainer = styled.div`
`;

const HeaderContainer = styled.div`
  display: flex;
  padding: 16px 0 32px 0;
`;

const Price = styled.div`
  font-size: 24px;
`;

const Title = styled.div`
  font-size: 18px;
`;

const Link = styled.a`
  cursor: pointer;
`;

const Image = styled.img`
  height: 180px;
  width: 180px;
  margin: 0 16px;
`;

const FreeShippingImage = styled.img`
  height: 18px;
  width: 18px;
  margin-left: 16px;
  align-self: center;
`;

export default {
  Container,
  DescriptionContainer,
  HeaderContainer,
  Link,
  Image,
  Price,
  Title,
  FreeShippingImage,
};