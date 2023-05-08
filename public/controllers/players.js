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
        this.getAllPosts = (request, response) => {
            try {
                response.status(200).json(this.players);
            }
            catch (err) {
                response.status(500).json({ error: err });
            }
        };
        this.createAPost = (request, response) => {
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
        this.router.get('/', this.getAllPosts);
        this.router.get(this.path, this.getAllPosts);
        this.router.post(this.path, this.createAPost);
    }
}
exports.default = PlayersController;
