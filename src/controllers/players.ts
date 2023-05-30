import express, {Request,Response} from 'express';
import Player from '../interfaces/player'
import players from "../data/players"

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
            response.status(200).json(this.players);
        }catch(err){
            response.status(500).json({error:err})
        }
        
      }
     
      createPlayer = (request: express.Request, response: express.Response) => {
        try{
            const player: Player = request.body;
            this.players.push(player);
            response.status(200).json(player);
        }catch(err){
            response.status(500).json({error:err})
        }
        
      }

}

export default PlayersController