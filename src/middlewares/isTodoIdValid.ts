import { NextFunction, Request, Response } from 'express';
import { todoDatabase } from '../database';

export const isTodoIdValid = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const todoId = String(req.params.todoId);

  const findTodo = todoDatabase.find((todo) => {
    return todo.id === todoId;
  });

  if (!findTodo) {
    return res
      .status(404)
      .json({ message: 'Not found any todo with this id.' });
  }

  res.locals.findTodo = findTodo;

  return next();
};
