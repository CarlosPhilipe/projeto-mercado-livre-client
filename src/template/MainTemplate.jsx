import React from 'react';
import { shape } from  'prop-types';

import Style from './MainTemplate.style';

function Items(props) {
  const { children } = props;

  return (
    <Style.Container>
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
