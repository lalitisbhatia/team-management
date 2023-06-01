import * as mongoose from 'mongoose';
interface Player {
    firstName: string;
    lastName: string;
    dob: Date;
    ccId: string;
    teams:string[]
}

export default Player