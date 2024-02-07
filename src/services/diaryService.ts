import {
  DiaryEntry,
  NewDiaryEntry,
  NonSensitiveInfoDiaryEntry
} from '../types';

import diaryData from './diary.json';

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

export const getEntries = () => diaries;

export const getById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find((diary) => diary.id === id);

  if (entry !== undefined) {
    const restOfDiary: NonSensitiveInfoDiaryEntry = {
      id: entry.id,
      date: entry.date,
      weather: entry.weather,
      visibility: entry.visibility
    };
    return restOfDiary;
  }

  return undefined;
};

export const getEntriesWithoutSensitiveInfo =
  (): NonSensitiveInfoDiaryEntry[] =>
    diaries.map(({ id, date, weather, visibility }) => {
      return { id, date, weather, visibility };
    });

export const addEntry = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map((entry) => entry.id)) + 1,
    ...newDiaryEntry
  };

  diaries.push(newDiary);
  return newDiary;
};
