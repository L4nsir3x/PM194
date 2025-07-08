import axios from 'axios';

export const fetchBooksByCategory = async (category) => {
  const URL = `https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=40`;

  try {
    const res = await axios.get(URL);
    return res.data.items || [];
  } catch (error) {
    throw new Error('Error al obtener libros');
  }
};
