export type Weather = 'sunny' | 'cloudy' | 'windy' | 'rainy' | 'stormy';
export type Visibility = 'great' | 'good' | 'ok' | 'poor';

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

// export type NonSensitiveInfoDiaryEntry = Pick<
//   DiaryEntry,
//   'id' | 'date' | 'weather' | 'visibility'
// >;

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>;

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;
