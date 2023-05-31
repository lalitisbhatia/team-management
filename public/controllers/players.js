"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const players_1 = __importDefault(require("../data/players"));
const models_1 = __importDefault(require("../interfaces/models"));
class PlayersController {
    constructor() {
        this.path = '/players';
        this.router = express_1.default.Router();
        this.players = players_1.default;
        this.getAllPlayers = (request, response) => {
            try {
                models_1.default.find().then(allPLayers => {
                    response.status(200).json(allPLayers);
                });
            }
            catch (err) {
                response.status(500).json({ error: err });
            }
        };
        this.createPlayer = (request, response) => {
            try {
                const player = request.body;
                const createdPlayer = new models_1.default(player);
                createdPlayer.save().then(savedPlayer => {
                    response.status(200).json(savedPlayer);
                });
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
