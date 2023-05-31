import express, {Request,Response} from 'express';
import Player from '../interfaces/player'
import players from "../data/players"
import playerModel from "../interfaces/models"

class PlayersController {
    public path = '/players';
    public router = express.Router();

    private players: Player[]= players

    constructor() {
        this.intializeRoutes();
      }
     
      public intializeRoutes() {
        this.router.get('/', this.getAllPlayers);
        this.router.get(this.path, this.getAllPlayers);
        this.router.post(this.path, this.createPlayer); 
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
     
      createPlayer = (request: express.Request, response: express.Response) => {
        try{
            const player: Player = request.body;
            const createdPlayer = new playerModel(player)
            createdPlayer.save().then(savedPlayer => {
              response.status(200).json(savedPlayer);
            })
            
        }catch(err){
            response.status(500).json({error:err})
        }
        
      }

}

export default PlayersController