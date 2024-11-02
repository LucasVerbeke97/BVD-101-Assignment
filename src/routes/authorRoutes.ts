import express, { Router } from 'express';

import { createAuthor, getAuthors, updateAuthor, deleteAuthor, getAuthorByID } from '../controllers/authorController';
import { validateAuthor, validateGetAuthorByID, validateUpdateAuthor } from './validation'

const router: Router = express.Router();



router.post('/', validateAuthor, createAuthor);
router.get('/', getAuthors);
router.get('/:id',validateGetAuthorByID, getAuthorByID);
router.put('/:id', validateUpdateAuthor, updateAuthor);
router.delete('/:id', deleteAuthor);

export default router;