import styled from 'styled-components';

const Container = styled.div`
  background-color: #FFE600;
  padding: 8px 0;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 53px 1fr;
  grid-gap: 32px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const LinkLogo = styled.a``;

const ImageLogo = styled.img`
  margin: auto;
`;

const SearchInputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 48px;
`;

const SearchButton = styled.button`
  outline: none;
  border: none;
  background-color: #EEEEEE;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

const SearchIcon = styled.img``;

const SearchInput = styled.input`
  color: #333333;
  width: 100%;
  border: 0;
  padding: 8px 12px;
  font-size: 18px;


  ::placeholder {
    color: #999999;
    opacity: 1;
  }
  :focus {
    outline: none;
  }
`;

export default {
  LinkLogo,
  ImageLogo,
  Container,
  Content,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  SearchIcon,
};
