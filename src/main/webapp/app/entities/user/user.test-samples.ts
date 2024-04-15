import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 17484,
  login: 'x+o@f6\\=T\\XM\\71',
};

export const sampleWithPartialData: IUser = {
  id: 3437,
  login: 'F',
};

export const sampleWithFullData: IUser = {
  id: 12435,
  login: 'NkA3O',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
