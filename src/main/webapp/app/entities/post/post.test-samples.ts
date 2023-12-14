import dayjs from 'dayjs/esm';

import { IPost, NewPost } from './post.model';

export const sampleWithRequiredData: IPost = {
  id: 275,
  title: 'yippee jade',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2023-12-13T22:30'),
};

export const sampleWithPartialData: IPost = {
  id: 18504,
  title: 'hedge',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2023-12-13T22:38'),
};

export const sampleWithFullData: IPost = {
  id: 29765,
  title: 'of',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2023-12-13T14:20'),
};

export const sampleWithNewData: NewPost = {
  title: 'giddy colorize merrily',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2023-12-14T05:44'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
