import express, { Router } from 'express';
import { createAuthor, getAuthors, updateAuthor, deleteAuthor } from '../controllers/authorController';

const router: Router = express.Router();

router.post('/', createAuthor);
router.get('/', getAuthors);
router.put('/:id', updateAuthor);
router.delete('/:id', deleteAuthor);

export default router;