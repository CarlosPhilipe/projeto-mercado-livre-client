import React from 'react';
import { render } from '@testing-library/react';
import { useRouter } from 'next/router';
import ListItems from '../Items';
import { validMock } from '../__mock__/list-items';

jest.mock('next/router');

describe('<ListItems />', () => {
  useRouter.mockImplementation(() => ({
    route: "/",
    pathname: "/",
    query: "q=iphone",
  }));


  test('should render the load page', async () => {
    const { items, categories } = validMock;
    const continer = render(<ListItems items={items} categories={categories} />);
    const itemsContainer = continer.queryByRole('items');
    expect(itemsContainer.childNodes.length).toBe(items.length);


    const breadCrumb = continer.queryByRole('bread_crumb');
    expect(breadCrumb.childNodes.length).toBe(categories.length);
  });
});
