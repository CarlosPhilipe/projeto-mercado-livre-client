import React from 'react';
import { shape } from  'prop-types';

import SearchBar from '../components/SearchBar';
import Style from './MainTemplate.style';

function Items(props) {
  const { children } = props;

  return (
    <Style.Container>
      <SearchBar />
      {children}
    </Style.Container>
  );
}

Items.propTypes = {
  children: shape({}),
};

Items.defaultProps = {
  children: null,
};

export default Items;
