import React from 'react';
import { node } from  'prop-types';

import SearchBar from '../components/SearchBar';
import Style from './MainTemplate.style';

function Items(props) {
  const { children } = props;

  return (
    <Style.Container>
      <SearchBar />
      <Style.Content>
        {children}
      </Style.Content>
    </Style.Container>
  );
}

Items.propTypes = {
  children: node,
};

Items.defaultProps = {
  children: null,
};

export default Items;
