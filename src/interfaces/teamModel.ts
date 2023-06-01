import * as mongoose from "mongoose"
import Team from './team'

const teamSchema = new mongoose.Schema({
    name:String,
    location: String,
    ccid: String,
    leagues: [String]
})

const teamModel = mongoose.model<Team & mongoose.Document>('Team', teamSchema);
 
export default teamModel;