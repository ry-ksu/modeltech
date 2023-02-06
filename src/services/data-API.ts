import axios from 'axios';

const baseURL = ' /';
export const dataURL = `${baseURL}data`;

export const getData = async () => {
  const result = await axios
    .get(dataURL)
    .then(({ data }) => data.response.objects)
    .catch(() => {
      throw new Error('Server error');
    });

  return result;
};
