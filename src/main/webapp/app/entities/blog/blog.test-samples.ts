import { IBlog, NewBlog } from './blog.model';

export const sampleWithRequiredData: IBlog = {
  id: 4443,
  name: 'where whoever',
  handle: 'shameless',
};

export const sampleWithPartialData: IBlog = {
  id: 27640,
  name: 'think antique',
  handle: 'terribly',
};

export const sampleWithFullData: IBlog = {
  id: 1425,
  name: 'armour',
  handle: 'only duh snow',
};

export const sampleWithNewData: NewBlog = {
  name: 'fooey',
  handle: 'enclave up perfectly',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
