import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const imageByName = async (query, page) => {
  const response = await axios.get(
    `/?q=${query}&page=${page}&key=30576193-c13648781b6f89bf6b7ef27da&image_type=photo&orientation=horizontal&per_page=12
`
  );
  console.log(response.data.hits);
  return response.data.hits;
};
