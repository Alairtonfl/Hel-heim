import express from 'express';
import userRoutes from '@User/Routes/UserRoutes';
import 'express-async-errors';
import 'reflect-metadata';
import './Database/connect';

const app = express();

app.use(express.json());
// app.use(routes);
app.use(userRoutes);

app.listen(3333, () => {
  console.log('Server started in port 3333');
});
