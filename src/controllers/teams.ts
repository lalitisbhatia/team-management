import express ,{Request,Response} from 'express'
import Team from '../interfaces/team'
import teams from "../data/teams"


class TeamsController {
    public path = "/teams";
    public router = express.Router();
    
    private Teams: Team[] = teams;
    
    constructor() {
        this.initializeRoutes()
    }

    
    private initializeRoutes = ()=>{
        this.router.get(this.path||"/",this.getAllTeams)
        this.router.post(this.path,this.createTeam)
    }

    private getAllTeams = (request:Request,response:Response) =>{
        try{
            response.status(200).json(this.Teams);
        }catch(err){
            response.status(500).json({error:err});
        }
    }

    private createTeam = (request:Request,response:Response) =>{
        try{
            const team:Team = request.body;
            teams.push(team)
            response.status(201).json(team)    
        }catch(err){
            response.status(500).json({error:err});
        }
        
    }
    
}
export default TeamsController