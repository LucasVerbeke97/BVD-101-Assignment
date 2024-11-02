import fs, { read } from 'fs';
import path from 'path';

import { User } from "../models/User";
import { Request, Response } from 'express';

const userFilePath = path.join(__dirname, '../data/users.json');

function readData<T>(filePath: string): T[] {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}
  
function writeData<T>(filePath: string, data: T[]): void {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

export const createUser = (req: Request, res: Response): void => {
    const users: User[] = readData<User>(userFilePath);

    const maxId = users.length > 0 ? Math.max(...users.map(user => user.id)) : 0;

    const newUser: User = {
        id: maxId + 1,
        ...req.body,
    };

    users.push(newUser);
    writeData<User>(userFilePath, users);

    res.status(201).json(newUser);
}

export const getUsers = (req: Request, res: Response): void => {
    const users: User[] = readData<User>(userFilePath);
    res.status(200).json(users);
};

export const getUserByID = (req: Request, res: Response): void => {
    const userID = parseInt(req.params.id, 10);

    const users: User[] = readData<User>(userFilePath);

    const user = users.find(u => u.id === userID);

    if(user)
      res.status(200).json(user);
    else
      res.status(404).json({message: 'Book does not exist'});
};

export const updateUser = (req: Request, res: Response): void => {
    const users: User[] = readData<User>(userFilePath);
    const index = users.findIndex(user => user.id === parseInt(req.params.id));
    if (index === -1) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
  
    users[index] = { ...users[index], ...req.body };
    writeData<User>(userFilePath, users);
    res.status(200).json(users[index]);
};

export const deleteUser = (req: Request, res: Response): void => {
    const user: User[] = readData<User>(userFilePath);
    const updateuser = user.filter(user => user.id !== parseInt(req.params.id));
    if (user.length === updateuser.length) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
  
    writeData<User>(userFilePath, updateuser);
    res.status(204).send();
};