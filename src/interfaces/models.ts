import * as mongoose from 'mongoose';
import Player from './player';
 
const playerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dob: Date,
    ccId: String,
    teams:[String]
});
 
const playerModel = mongoose.model<Player & mongoose.Document>('Player', playerSchema);
 
export default playerModel;