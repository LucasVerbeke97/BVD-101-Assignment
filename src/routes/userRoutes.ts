import express, { Router } from 'express';

import { createUser, getUsers, updateUser, deleteUser, getUserByID } from '../controllers/userController';
import { validateUser, validateUpdateUser } from './validation'

const router: Router = express.Router();

router.post('/', validateUser, createUser);
router.get('/', getUsers);
router.get('/:id', getUserByID);
router.put('/:id',validateUpdateUser, updateUser);
router.delete('/:id', deleteUser);

export default router;