import { Book } from '../models/book';
import { v4 as uuidv4 } from 'uuid';

const create = ({
  title,
  bookGenres,
  status,
  exemplaryQuantity,
  author,
}: {
  title: string;
  bookGenres: string;
  status: string;
  exemplaryQuantity: number;
  author: string;
}) => {
  return new Book({
    id: uuidv4(),
    title,
    bookGenres,
    status,
    exemplaryQuantity,
    author,
    created_at: new Date().toISOString(),
  });
};

export default { create };

