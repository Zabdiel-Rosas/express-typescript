import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send('Get all Diary Entries!!');
});

router.post('/', (_req, res) => {
  res.send('Create new Diary Entry!!');
});

export default router;
