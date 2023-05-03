import { IClub } from './IClub';

export interface IPerson {
  name: String,
  clubs: IClub[],
  createdClubs: IClub[]
};