import axios from 'axios';

const getInitialProps = async ({ query }) => {
  // Call my external API endpoin
  if (!query.id) {
    return {};
  }

  const response = await axios
    .get(`http://127.0.0.1:8000/api/items/${query.id}`)
    .then(({ data }) => data);

  const { item } = response;

  return {
    item,
  }
}

export default getInitialProps;
