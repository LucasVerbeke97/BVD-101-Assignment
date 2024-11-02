import { body, validationResult } from 'express-validator';


//book
export const validateBook = [
    body('title')
        .isString()
        .withMessage('Title must be a string.')
        .notEmpty()
        .withMessage('Title is required.'),
    body('authorId')
        .isNumeric()
        .withMessage('Author ID must be a number.')
        .notEmpty()
        .withMessage('Author ID is required.'),
    body('publicationDate')
        .isISO8601()
        .withMessage('Publication date must be a valid date.')
        .notEmpty()
        .withMessage('Publication date is required.'),
    body('isbn')
        .isString()
        .withMessage('ISBN must be a string.')
        .notEmpty()
        .withMessage('ISBN is required.'),
];
export const validateUpdateBook = [
    body('title')
        .optional()
        .isString()
        .withMessage('Title must be a string.'),
    body('authorId')
        .optional()
        .isNumeric()
        .withMessage('Author ID must be a number.'),
    body('publicationDate')
        .optional()
        .isISO8601()
        .withMessage('Publication date must be a valid date.'),
    body('isbn')
        .optional()
        .isString()
        .withMessage('ISBN must be a string.'),
];
export const validateGetBookByID = [
    body('id')
    .isNumeric()
];


//user
export const validateUser = [
    body('name')
        .isString()
        .withMessage('Name must be a string.')
        .notEmpty()
        .withMessage('Name is required.'),
    body('email')
        .isEmail()
        .withMessage('Email must be a valid email address.')
        .notEmpty()
        .withMessage('Email is required.'),
    body('purchasedBooks')
        .isArray()
        .withMessage('Purchased books must be an array.')
        .optional()
];
export const validateUpdateUser = [
    body('name')
        .optional() 
        .isString()
        .withMessage('Name must be a string.'),
    body('email')
        .optional() 
        .isEmail()
        .withMessage('Email must be a valid email address.'),
    body('purchasedBooks')
        .optional() 
        .isArray()
        .withMessage('Purchased books must be an array.'),
];
export const validateGetUserByID = [
    body('id')
    .isNumeric()
];


//author
export const validateAuthor = [
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
export const validateUpdateAuthor = [
    body('name')
        .optional() 
        .isString()
        .withMessage('Name must be a string.'),
    body('books')
        .optional() 
        .isArray()
        .withMessage('Books must be an array.'),
    body('biography')
        .optional() 
        .isString()
        .withMessage('Biography must be a string.'),
];
export const validateGetAuthorByID = [
    body('id')
    .isNumeric()
];
