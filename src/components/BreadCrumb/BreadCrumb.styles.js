import styled from 'styled-components';

const Container = styled.div`
  max-width: 100%;
  width: 100%;
  padding: 16px 0;
  margin-right: auto;
  margin-left: auto;
`;

const UnumeradList = styled.ul`
  color: #999999;
  list-style-type: none;
`;

const ListItem = styled.li`
  font-size: 16px;
  display: inline;
  margin-right: 8px;

  ${({ lastItem }) => lastItem && 'font-weight: bold;'};
`;

export default {
  Container,
  UnumeradList,
  ListItem,
};