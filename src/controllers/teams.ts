import {Request,Response} from 'express'
import Team from '../interfaces/team'
import teamModel from "../interfaces/teamModel";
import BaseController from './baseController';

class TeamsController extends BaseController{
   
    
    constructor() {
        super()
        this.path = "/teams";
        this.initRoutes()
    }

    
    initRoutes = ()=>{
        this.router.get(this.path||"/",this.getAllTeams)
        this.router.post(this.path,this.createTeam)
    }

    private getAllTeams = (request:Request,response:Response) =>{
        try{
            teamModel.find().then(allTeams =>{
                response.status(200).json(allTeams);
            })
        }catch(err){
            response.status(500).json({error:err});
        }
    }

    private createTeam = (request:Request,response:Response) =>{
        try{
            const team: Team = request.body;
            const createdTeam = new teamModel(team);
            createdTeam.save().then(savedTeam =>{
                response.status(201).json(savedTeam)   
            })
             
        }catch(err){
            response.status(500).json({error:err});
        }
        
    }
    
}
export default TeamsController