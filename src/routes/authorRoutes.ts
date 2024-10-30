import express, { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { createAuthor, getAuthors, updateAuthor, deleteAuthor } from '../controllers/authorController';

const router: Router = express.Router();

const validateAuthor = [
    body('name')
        .isString()
        .withMessage('Name must be a string.')
        .notEmpty()
        .withMessage('Name is required.'),
    body('bio')
        .isString()
        .withMessage('Biography must be a string.')
        .notEmpty()
        .withMessage('Biography is required.'),
];

router.post('/', validateAuthor, createAuthor);
router.get('/', getAuthors);
router.put('/:id', updateAuthor);
router.delete('/:id', deleteAuthor);

export default router;