import { TBook } from "@/types";

const generateRandomBook = (): Omit<TBook, "id"> => {
  const isbn = Math.random().toString(36).substring(7);
  const title = "Random Book Title";
  const cover = "http://url.to.book.cover";
  const author = "Random Author";
  const published = Math.floor(Math.random() * 1000) + 1000;
  const pages = Math.floor(Math.random() * 500) + 100;
  const status = Math.floor(Math.random() * 4);

  return {
    isbn,
    title,
    cover,
    author,
    published,
    pages,
    status,
  };
};

export default generateRandomBook;
