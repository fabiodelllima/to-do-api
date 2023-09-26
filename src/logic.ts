import { Request, Response } from 'express';
import { todoDatabase } from './database';
import { v4 as uuidv4 } from 'uuid';

export const readTodos = (req: Request, res: Response) => {
  return res.status(200).json(todoDatabase);
};

export const readTodoById = (req: Request, res: Response) => {
  return res.status(200).json(res.locals.findTodo);
};

export const createTodo = (req: Request, res: Response) => {
  const newTodo = {
    id: uuidv4(),
    title: String(req.body.title),
    content: String(req.body.content),
  };

  todoDatabase.push(newTodo);

  return res.status(201).json({
    message: 'Todo succesfully created.',
    todo: newTodo,
  });
};

