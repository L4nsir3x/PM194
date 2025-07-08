export const groupBooksByAuthor = (books) => {
  const grouped = {};

  books.forEach(book => {
    const info = book.volumeInfo || {};
    const authors = info.authors || ['Autor desconocido'];

    authors.forEach(author => {
      if (!grouped[author]) grouped[author] = [];
      grouped[author].push(book);
    });
  });

  return Object.entries(grouped)
    .filter(([author, data]) => data.length >= 2)  // Filtra autores con 2 o más libros
    .map(([author, data]) => ({
      title: author,
      data
    }));
};
