import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '5176b0cb-6100-42b6-b3a8-8721f83a5f92',
};

export const sampleWithPartialData: IAuthority = {
  name: '5d16fd0d-8387-48b9-be9c-cd021e515abe',
};

export const sampleWithFullData: IAuthority = {
  name: '3dd75831-2491-40c6-a9e4-4369de93abc0',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
