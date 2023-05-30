"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const players_1 = __importDefault(require("../data/players"));
class PlayersController {
    constructor() {
        this.path = '/players';
        this.router = express_1.default.Router();
        this.players = players_1.default;
        this.getAllPlayers = (request, response) => {
            try {
                response.status(200).json(this.players);
            }
            catch (err) {
                response.status(500).json({ error: err });
            }
        };
        this.createPlayer = (request, response) => {
            try {
                const player = request.body;
                this.players.push(player);
                response.status(200).json(player);
            }
            catch (err) {
                response.status(500).json({ error: err });
            }
        };
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.get('/', this.getAllPlayers);
        this.router.get(this.path, this.getAllPlayers);
        this.router.post(this.path, this.createPlayer);
    }
}
exports.default = PlayersController;
