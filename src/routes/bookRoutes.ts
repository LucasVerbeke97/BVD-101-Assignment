import express, { Router } from 'express';

import { createBook, getBooks, updateBook, deleteBook, getBookbyID } from '../controllers/bookController';
import { validateBook, validateGetBookByID, validateUpdateBook } from './validation'

const router: Router = express.Router();

router.post('/', validateBook, createBook);
router.get('/', getBooks);
router.get('/:id',validateGetBookByID, getBookbyID);
router.put('/:id',validateUpdateBook, updateBook);
router.delete('/:id', deleteBook);

export default router;
