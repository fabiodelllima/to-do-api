import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', readTodos);


app.listen(PORT, () => {
  console.log(`Server srarted on port ${PORT}`);
});
