import express from 'express';

const app = express();

app.listen(3333, () => {
  console.log('Server started in port 3333');
});
