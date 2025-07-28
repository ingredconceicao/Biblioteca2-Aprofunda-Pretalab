import { Book } from "../../../core/entities/Book";
import { BookRepository, SearchParams } from "../../../core/repositories/BookRepository";
import { model, Schema } from "mongoose";

const bookSchema = new Schema<Book>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: { type: Number, required: true },
  format: { type: String, required: true },
  pages: { type: Number, required: true },
  genres: { type: [String], required: true },
  language: { type: String, required: true }
}, { timestamps: true });

const BookModel = model<Book>('Book', bookSchema);

export class MongoBookRepository implements BookRepository {
  async save(book: Book): Promise<Book> {
    const created = await BookModel.create(book);
    return new Book(
      created.title,
      created.author,
      created.publishedYear,
      created.format,
      created.pages,
      created.genres,
      created.language,
      created._id.toString()
    );
  }

  async findById(id: string): Promise<Book | null> {
    const found = await BookModel.findById(id);
    if (!found) return null;

    return new Book(
      found.title,
      found.author,
      found.publishedYear,
      found.format,
      found.pages,
      found.genres,
      found.language,
      found._id.toString()
    );
  }

  async findByTitle(title: string): Promise<Book | null> {
    const found = await BookModel.findOne({ title });
    if (!found) return null;

    return new Book(
      found.title,
      found.author,
      found.publishedYear,
      found.format,
      found.pages,
      found.genres,
      found.language,
      found._id.toString()
    );
  }

  async findAll(): Promise<Book[]> {
    const books = await BookModel.find();
    return books.map(b =>
      new Book(
        b.title,
        b.author,
        b.publishedYear,
        b.format,
        b.pages,
        b.genres,
        b.language,
        b._id.toString()
      )
    );
  }

  async search(params: SearchParams): Promise<Book[]> {
    const filters: any[] = [];

    if (params.title) {
      filters.push({ title: { $regex: params.title, $options: "i" } });
    }

    if (params.author) {
      filters.push({ author: { $regex: params.author, $options: "i" } });
    }

    if (params.language) {
      filters.push({ language: { $regex: params.language, $options: "i" } });
    }

    const query = filters.length > 0 ? { $or: filters } : {};

    const results = await BookModel.find(query);

    return results.map(b =>
      new Book(
        b.title,
        b.author,
        b.publishedYear,
        b.format,
        b.pages,
        b.genres,
        b.language,
        b._id.toString()
      )
    );
  }

  async update(id: string, updatedData: Partial<Book>): Promise<Book | null> {
    const updated = await BookModel.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updated) return null;

    return new Book(
      updated.title,
      updated.author,
      updated.publishedYear,
      updated.format,
      updated.pages,
      updated.genres,
      updated.language,
      updated._id.toString()
    );
  }

  async delete(id: string): Promise<void> {
    await BookModel.findByIdAndDelete(id);
  }
}

