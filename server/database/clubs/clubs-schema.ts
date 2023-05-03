import { Types, Schema } from 'mongoose';
import { IPerson } from '../../interfaces/IPerson';
import { IBook } from '../../interfaces/IBook';
import { IClub } from '../../interfaces/IClub';

const clubsSchema = new Schema<IClub>({
  name: { type: String, required: true },
  date_created: { type: Date, default: Date.now() },
  admin: { type: String, required: true },
  members: Types.DocumentArray<IPerson>,
  currentlyReading: { type: Schema.Types.ObjectId },
  readingList: Types.DocumentArray<IBook>,
}, { collection: 'clubs' });

export default clubsSchema;
