import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the PERN Product Store API');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});