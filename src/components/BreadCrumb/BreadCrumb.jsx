import React from 'react';
import { arrayOf, string } from 'prop-types';

import Style from './BreadCrumb.styles';

function BreadCrumb ({ categories }) {
  return (
    <Style.Container>
      <Style.UnumeradList>
        {categories.map((category, index) => {
          return (
            <Style.ListItem
              key={category}
              lastItem={(index === categories.length - 1)}
            >
              {category} {(index !== categories.length - 1) && (
                <span>{' >'}</span>
              )}
            </Style.ListItem>
          );
        })}
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
