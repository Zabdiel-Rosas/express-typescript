import express from 'express';

const app = express();
const port = 3000;

// middlewares
app.use(express.json());

app.get('/ping', (_req, res) => {
  res.send('pong!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
