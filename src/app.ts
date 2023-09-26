import express from 'express';
import { validation } from './middlewares/validation';
import { isTodoIdValid } from './middlewares/isTodoIdValid';
import {
  createTodo,
  deleteTodo,
  readTodoById,
  readTodos,
  updateTodo,
} from './logic';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', readTodos);

app.get('/:todoId', isTodoIdValid, readTodoById);

app.post('/', validation(createTodoValidation), createTodo);

app.delete('/:todoId', isTodoIdValid, deleteTodo);

app.put(
  '/:todoId',
  validation(updateTodoValidation),
  isTodoIdValid,
  updateTodo
);

app.listen(PORT, () => {
  console.log(`Server srarted on port ${PORT}`);
});
