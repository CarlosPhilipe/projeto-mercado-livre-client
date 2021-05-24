import React from 'react';
import { arrayOf, string } from 'prop-types';

import Style from './BreadCrumb.styles';

function BreadCrumb ({ categories }) {
  return (
    <Style.Container id='bread_crumb'>
      <Style.UnumeradList role='bread_crumb'>
        {categories.map((category, index) => (
          <Style.ListItem
            key={category}
            lastItem={(index === categories.length - 1)}
          >
            {category} {(index !== categories.length - 1) && (
              <span>{' >'}</span>
            )}
          </Style.ListItem>
        ))}
      </Style.UnumeradList>
    </Style.Container>
  );
}

BreadCrumb.propTypes = {
  categories: arrayOf(string),
};

BreadCrumb.defaulfProps = {
  categories: [],
};


export default BreadCrumb;
