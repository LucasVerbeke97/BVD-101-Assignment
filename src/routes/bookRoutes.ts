import express, { Router } from 'express';

import { createBook, getBooks, updateBook, deleteBook } from '../controllers/bookController';
import { validateBook, validateUpdateBook } from './validation'

const router: Router = express.Router();

router.post('/', validateBook, createBook);
router.get('/', getBooks);
router.put('/:id',validateUpdateBook, updateBook);
router.delete('/:id', deleteBook);

export default router;
