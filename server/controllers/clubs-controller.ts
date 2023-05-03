import { Query, Document, Types } from "mongoose";
import * as clubsDao from "../database/clubs/clubs-dao";
import { IClub } from "../interfaces/IClub";

const createClub = async (req: { body: IClub; }, res: any) => {
  const createdClub = clubsDao.createClub(req.body);
  res.sendStatus(200);
}

const getClub = async (req: { body: { _id: String; }; }, res: any) => {
  const club = clubsDao.getClub(req.body._id);
  res.json(club);
  res.sendStatus(200);
}

const clubsController = (app: any) => {
  app.post('/club', createClub);
  app.post('/club/:club_id', getClub);
}

export default clubsController;