interface Book {
  id: string;
  title: string;
  bookGenres: string;
  status: string;
  exemplaryQuantity: number;
  author: string;
  created_at: string;
}

const books: Book[] = [];

const add = (book: Book): void => {
  books.push(book);
};

const getAll = (): Book[] => {
  return books;
};

const getById = (id: string): Book | undefined => {
  return books.find(book => book.id === id);
};

const deleteBook = (id: string): Book[] => {
  const index = books.findIndex(book => book.id === id);
  if (index !== -1) books.splice(index, 1);
  return books;
};


export default {
  books,
  add,
  getAll,
  getById,
  deleteBook,
};



