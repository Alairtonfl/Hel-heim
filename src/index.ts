import express from 'express';
import routes from './Routes/Routes';
import 'reflect-metadata';
//import './Database/connect.ts';

const app = express();

app.listen(3333, () => {
  console.log('Server started in port 3333');
});

app.use(routes);
