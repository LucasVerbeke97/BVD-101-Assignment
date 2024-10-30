import fs from 'fs';
import path from 'path';

import { Book } from "../models/Book";
import { Request, Response } from 'express';

const booksFilePath = path.join(__dirname, '../data/books.json');

function readData<T>(filePath: string): T[] {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}
  
function writeData<T>(filePath: string, data: T[]): void {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

export const createBook = (req: Request, res: Response): void => {
    const books: Book[] = readData<Book>(booksFilePath);
  
    const maxId = books.length > 0 ? Math.max(...books.map(book => book.id)) : 0;
  
    const newBook: Book = {
      id: maxId + 1,
      ...req.body,
    };

    books.push(newBook);
    writeData<Book>(booksFilePath, books);

    res.status(201).json(newBook);
};

export const getBooks = (req: Request, res: Response): void => {
    const books: Book[] = readData<Book>(booksFilePath);
    res.status(200).json(books);
};

export const updateBook = (req: Request, res: Response): void => {
    const books: Book[] = readData<Book>(booksFilePath);
    const index = books.findIndex(book => book.id === parseInt(req.params.id));
    if (index === -1) {
      res.status(404).json({ error: 'Book not found' });
      return;
    }
  
    books[index] = { ...books[index], ...req.body };
    writeData<Book>(booksFilePath, books);
    res.status(200).json(books[index]);
};

export const deleteBook = (req: Request, res: Response): void => {
    const books: Book[] = readData<Book>(booksFilePath);
    const updatedBooks = books.filter(book => book.id !== parseInt(req.params.id));
    if (books.length === updatedBooks.length) {
      res.status(404).json({ error: 'Book not found' });
      return;
    }
  
    writeData<Book>(booksFilePath, updatedBooks);
    res.status(204).send();
};
  