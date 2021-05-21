import styled from 'styled-components';

const Container = styled.div`
  background-color: #FFE600;
  padding: 8px 0;
`;

const Input = styled.input`
  color: #333333;
  width: 100%;
  border: 0;
  padding: 8px;
  font-size: 18px;

  :focus {
    outline: none;
  }
`;

export default {
  Container,
  Input,
};
