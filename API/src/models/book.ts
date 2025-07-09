export class Book {
  id: string;
  title: string;
  bookGenres: string;
  status: string;
  exemplaryQuantity: number;
  author: string;
  created_at: string;

  constructor({
    id,
    title,
    bookGenres,
    status,
    exemplaryQuantity,
    author,
    created_at,
  }: {
    id: string;
    title: string;
    bookGenres: string;
    status: string;
    exemplaryQuantity: number;
    author: string;
    created_at: string;
  }) {
    this.id = id;
    this.title = title;
    this.bookGenres = bookGenres;
    this.status = status;
    this.exemplaryQuantity = exemplaryQuantity;
    this.author = author;
    this.created_at = created_at;
  }
}
