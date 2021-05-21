import React from 'react';
import { shape } from  'prop-types';

import Style from './SearchBar.style';

function SearchBar() {
  return (
    <Style.Container>
      <Style.Input placeholder='Nunca pare de buscar' />
    </Style.Container>
  );
}

SearchBar.propTypes = {
  children: shape({}),
};

SearchBar.defaultProps = {
  children: null,
};

export default SearchBar;
