import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: #EEEEEE;
`;


const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export default {
  Container,
  Content,
};
