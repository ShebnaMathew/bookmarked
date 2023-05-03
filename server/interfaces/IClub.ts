import { IPerson } from './IPerson';
import { IBook } from './IBook';

export interface IClub {
  name: String,
  date_created: Date,
  admin: String,
  members: IPerson[],
  currentlyReading: IBook,
  readingList: IBook[]
};