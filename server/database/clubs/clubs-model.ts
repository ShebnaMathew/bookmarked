import mongoose from "mongoose";
import clubsSchema from "./clubs-schema";

const clubsModel = mongoose.model("ClubsModel", clubsSchema);

export default clubsModel;
