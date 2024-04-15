import { ITag, NewTag } from './tag.model';

export const sampleWithRequiredData: ITag = {
  id: 13522,
  name: 'obsidian calmly ick',
};

export const sampleWithPartialData: ITag = {
  id: 16462,
  name: 'bravely',
};

export const sampleWithFullData: ITag = {
  id: 22539,
  name: 'whenever drafty oh',
};

export const sampleWithNewData: NewTag = {
  name: 'yippee clerk motorcar',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
