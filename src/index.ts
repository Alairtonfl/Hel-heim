import 'dotenv/config';
import express from 'express';
import userRoutes from '@User/Routes/UserRoutes';
import questionRoutes from '@Question/Routes/QuestionRoutes';
import 'express-async-errors';
import 'reflect-metadata';
import './Database/connect';

const app = express();

app.use(express.json());
app.use(userRoutes);
app.use(questionRoutes);

app.listen(3333, () => {
  console.log('Server started in port 3333');
});
