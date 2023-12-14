import { ITag, NewTag } from './tag.model';

export const sampleWithRequiredData: ITag = {
  id: 31922,
  name: 'phase',
};

export const sampleWithPartialData: ITag = {
  id: 6701,
  name: 'following',
};

export const sampleWithFullData: ITag = {
  id: 8708,
  name: 'uncomfortable fickle',
};

export const sampleWithNewData: NewTag = {
  name: 'tunnel parallelogram safely',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
