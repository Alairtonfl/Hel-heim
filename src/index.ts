import express, { NextFunction, Request, Response } from 'express';
import routes from './Routes/Routes';
import 'express-async-errors';
import 'reflect-metadata';
import './Database/connect';

const app = express();

app.use(express.json());
app.use(routes);

// app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
//   console.error(err);

//   return res.status(500).json({
//     status: 'error',
//     message: err.message,
//   });
// });

app.listen(3333, () => {
  console.log('Server started in port 3333');
});
