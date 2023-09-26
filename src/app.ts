import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', readTodos);

app.get('/:todoId', isTodoIdValid, readTodoById);

app.post('/', validation(createTodoValidation), createTodo);

app.delete('/:todoId', isTodoIdValid, deleteTodo);


app.listen(PORT, () => {
  console.log(`Server srarted on port ${PORT}`);
});
