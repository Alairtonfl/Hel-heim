import express from 'express';
import 'reflect-metadata';
import './Database/connect.ts';

const app = express();

app.listen(3333, () => {
  console.log('Server started in port 3333');
});
