import dayjs from 'dayjs/esm';

import { IPost, NewPost } from './post.model';

export const sampleWithRequiredData: IPost = {
  id: 23885,
  title: 'stab frenzy',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-03-21T23:38'),
};

export const sampleWithPartialData: IPost = {
  id: 24573,
  title: 'cooperative glow stave',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-03-21T13:27'),
};

export const sampleWithFullData: IPost = {
  id: 19964,
  title: 'pungent',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-03-22T05:02'),
};

export const sampleWithNewData: NewPost = {
  title: 'deafening soon',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-03-21T18:06'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
