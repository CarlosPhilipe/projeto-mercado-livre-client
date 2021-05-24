import React from 'react';
import { render } from '@testing-library/react';
import { useRouter } from 'next/router';
import ListItems from '..';
import { validMock } from '../__mock__/list-items';

jest.mock('next/router');

describe('<ListItems />', () => {
  useRouter.mockImplementation(() => ({
    route: "/",
    pathname: "/",
    query: "q=iphone",
  }));


  test('should render the load page', async () => {
    const { items } = validMock;
    const continer = render(<ListItems items={items} />);
    const itemsContainer = continer.queryByRole('items');
    expect(itemsContainer.childNodes.length).toBe(items.length);
  });
});
