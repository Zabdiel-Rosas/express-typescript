import express from 'express';

import * as diaryServices from '../services/diaryService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.get('/:id', (req, res) => {
  const diary = diaryServices.getById(Number(req.params.id));
  return diary ? res.send(diary) : res.status(404);
});

router.post('/', (req, res) => {
  const { date, weather, visibility, comment } = req.body;
  const newEntry = diaryServices.addEntry({
    date,
    weather,
    visibility,
    comment
  });
  res.send(newEntry);
});

export default router;
