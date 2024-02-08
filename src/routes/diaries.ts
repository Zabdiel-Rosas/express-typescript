import express from 'express';

import * as diaryServices from '../services/diaryService';
import toNewDiaryEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.get('/:id', (req, res) => {
  const diary = diaryServices.getById(Number(req.params.id));
  return diary ? res.send(diary) : res.status(404);
});

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body);
    const addedNewEntry = diaryServices.addEntry(newDiaryEntry);

    res.send(addedNewEntry);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

export default router;
