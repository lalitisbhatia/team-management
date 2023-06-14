import express, {Request,Response} from 'express';
import Player from '../interfaces/player'
import playerModel from "../interfaces/playerModel"
import BaseController from "./baseController"

class PlayersController extends BaseController{
    public path = '/players';
    public router = express.Router();

    constructor() {
        super();
        this.path = '/players';        
        this.initRoutes()
      }
     
      initRoutes = () => {        
        this.router.get('/', this.getHP);
        this.router.get(this.path, this.getAllPlayers);
        this.router.get(`${this.path}/:id`, this.getPlayer);
        this.router.post(this.path, this.createPlayer); 
        this.router.put(`${this.path}/:id`, this.updatePlayer); 
      }

      private getHP(req:Request, res:Response) {
        res.status(200).json({message: "welcome"})
    }
     
      getAllPlayers = (request: express.Request, response: express.Response) => {
        try{
            playerModel.find().then(allPLayers =>{
              response.status(200).json(allPLayers);
            })
        }catch(err){
            response.status(500).json({error:err})
        }        
      }

      getPlayer = (request: express.Request, response: express.Response) => {
        try{
            playerModel.findOne({_id:request.params.id}).then(player =>{
              response.status(200).json(player);
            })
        }catch(err){
            response.status(500).json({error:err})
        }        
      }
     
      createPlayer = (request: express.Request, response: express.Response) => {
        try{
            const player:Player = request.body;
            const createdPlayer = new playerModel(player)
            createdPlayer.save().then(savedPlayer => {
              response.status(200).json(savedPlayer);
            })            
        }catch(err){
            response.status(500).json({error:err})
        }              
      }

      updatePlayer =  (request: express.Request, response: express.Response) => {        
        try{
            const player:Player = request.body;                       
            playerModel.findByIdAndUpdate(request.params.id,player).then((updatedPlayer)=>{
              response.status(201).json(updatedPlayer);
            })           
        }catch(err){
            response.status(500).json({error:err})
        }
      }
}

export default PlayersController