import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { shape } from  'prop-types';

import Style from './SearchBar.style';
import info from './data';

const CHAR_CODE_ENTER = 13;

function SearchBar() {
  const [searchString, setSearchString] = useState('');
  const { query } = useRouter();

  useEffect(() => {
    if (query && query.q) {
      setSearchString(query.q);
    }
  },[query]);

  const canBeSubmit = () => {
    if (searchString) {
      window.location.href = `/items?q=${searchString}`;
    }
  };

  const checkKeyPressed = (e) => {
    if(e.charCode === CHAR_CODE_ENTER){
      canBeSubmit();
    }
  };

  return (
    <Style.Container>
      <Style.Content>
        <Style.ImageLogo src={info.logo.src} alt={info.logo.alt} />
        <Style.SearchInputContainer>
          <Style.SearchInput
            id='serach_input'
            name='serach_input'
            value={searchString}
            onChange={e => { setSearchString(e.target.value);}}
            placeholder={info.SearchInputPlaceholder}
            onKeyPress={checkKeyPressed}
            tabIndex={1}
          />
          <Style.SearchButton onClick={canBeSubmit}>
            <Style.SearchIcon src={info.searchIcon.src} alt={info.searchIcon.alt} />
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
