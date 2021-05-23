import React from 'react';
import { render } from '@testing-library/react';
import BreadCrumb from '../BreadCrumb';

const categories = ['category 1', 'category 2', 'category 3', 'category 4'];

describe('<BreadCrumb />', () => {
  test('should render the number of categories equal your param', async () => {
    const { container } = render(<BreadCrumb categories={categories} />);
    const ul = container.querySelector('#bread_crumb').firstChild.childNodes;

    expect(ul.length).toBe(categories.length);
  });
});