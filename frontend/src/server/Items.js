import axios from 'axios';

const getInitialProps = async ({ query }) => {
  // Call my external API endpoin
  if (!query.q) {
    return {};
  }

  const response = await axios
    .get(`http://127.0.0.1:8000/api/items?q=${query.q}&limit=4`)
    .then(({ data }) => data)

  const { items, categories } = response;

  return {
    items,
    categories,
  }
}

export default getInitialProps;
