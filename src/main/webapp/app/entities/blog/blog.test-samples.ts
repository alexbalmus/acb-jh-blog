import { IBlog, NewBlog } from './blog.model';

export const sampleWithRequiredData: IBlog = {
  id: 2548,
  name: 'good mostly',
  handle: 'beneath indeed',
};

export const sampleWithPartialData: IBlog = {
  id: 12173,
  name: 'enthusiastically about encircle',
  handle: 'anti disconnection',
};

export const sampleWithFullData: IBlog = {
  id: 19031,
  name: 'dislike now',
  handle: 'bah',
};

export const sampleWithNewData: NewBlog = {
  name: 'jaded hasty',
  handle: 'ack',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
