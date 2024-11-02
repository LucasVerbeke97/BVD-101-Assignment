import fs, { read } from 'fs';
import path from 'path';

import { Author } from "../models/Author";
import { Request, Response } from 'express';

const authorFilePath = path.join(__dirname, '../data/authors.json');

function readData<T>(filePath: string): T[] {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}
  
function writeData<T>(filePath: string, data: T[]): void {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

export const createAuthor = (req: Request, res: Response): void => {
    const authors: Author[] = readData<Author>(authorFilePath);

    const maxId = authors.length > 0 ? Math.max(...authors.map(author => author.id)) : 0;

    const newAuthor: Author = {
        id: maxId + 1,
        ...req.body,
    };

    authors.push(newAuthor);
    writeData<Author>(authorFilePath, authors);

    res.status(201).json(newAuthor);
}

export const getAuthors = (req: Request, res: Response): void => {
    const authors: Author[] = readData<Author>(authorFilePath);
    res.status(200).json(authors);
};

export const getAuthorByID = (req: Request, res: Response): void => {
    const authorID = parseInt(req.params.id, 10);

    const authors: Author[] = readData<Author>(authorFilePath);

    const author = authors.find(a => a.id === authorID);

    if(author)
      res.status(200).json(author);
    else
      res.status(404).json({message: 'Author does not exist'});
};

export const updateAuthor = (req: Request, res: Response): void => {
    const authors: Author[] = readData<Author>(authorFilePath);
    const index = authors.findIndex(author => author.id === parseInt(req.params.id));
    if (index === -1) {
      res.status(404).json({ error: 'Author not found' });
      return;
    }
  
    authors[index] = { ...authors[index], ...req.body };
    writeData<Author>(authorFilePath, authors);
    res.status(200).json(authors[index]);
};

export const deleteAuthor = (req: Request, res: Response): void => {
    const author: Author[] = readData<Author>(authorFilePath);
    const updateAuthor = author.filter(author => author.id !== parseInt(req.params.id));
    if (author.length === updateAuthor.length) {
      res.status(404).json({ error: 'Author not found' });
      return;
    }
  
    writeData<Author>(authorFilePath, updateAuthor);
    res.status(204).send();
};