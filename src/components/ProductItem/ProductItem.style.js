import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  background-color: #FFFFFF;
  color: #333333;
`;

const Content = styled.div`
  padding: 16px 0;
  display: flex;
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

const Address = styled.div`
  padding-top: 48px;
`;

export default {
  Container,
  Content,
  DescriptionContainer,
  HeaderContainer,
  Link,
  Image,
  Price,
  Title,
  FreeShippingImage,
  Address,
};