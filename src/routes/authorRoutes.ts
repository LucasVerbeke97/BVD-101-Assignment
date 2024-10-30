import express, { Router } from 'express';

import { createAuthor, getAuthors, updateAuthor, deleteAuthor } from '../controllers/authorController';
import { validateAuthor, validateUpdateAuthor } from './validation'

const router: Router = express.Router();



router.post('/', validateAuthor, createAuthor);
router.get('/', getAuthors);
router.put('/:id', validateUpdateAuthor, updateAuthor);
router.delete('/:id', deleteAuthor);

export default router;