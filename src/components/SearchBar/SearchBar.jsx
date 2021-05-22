import React from 'react';
import { shape } from  'prop-types';

import Style from './SearchBar.style';

import info from './data';

function SearchBar() {
  return (
    <Style.Container>
      <Style.Content>
        <Style.ImageLogo src={info.logo.src} alt={info.logo.alt} />
        <Style.SearchInputContainer>
          <Style.SearchInput name='serach_input' placeholder={info.SearchInputPlaceholder} />
          <Style.SearchButton>
            <Style.SearchIcon src={info.searchIcon.src} alt={info.searchIcon} />
          </Style.SearchButton>
        </Style.SearchInputContainer>
      </Style.Content>
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
