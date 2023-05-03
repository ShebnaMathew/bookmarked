import { IClub } from '../../interfaces/IClub';
import clubsModel from './clubs-model';

export const createClub = (club: IClub) => clubsModel.create(club);
export const getClub = (clubId: String) => clubsModel.findOne({ _id: clubId });