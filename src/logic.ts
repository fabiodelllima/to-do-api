import { Request, Response } from 'express';
import { todoDatabase } from './database';
export const readTodos = (req: Request, res: Response) => {
  return res.status(200).json(todoDatabase);
};

