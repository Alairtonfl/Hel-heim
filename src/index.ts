import express from 'express';
import routes from './Routes/Routes';
import 'reflect-metadata';
import './Database/connect';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server started in port 3333');
});
