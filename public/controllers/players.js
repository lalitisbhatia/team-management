"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const playerModel_1 = __importDefault(require("../interfaces/playerModel"));
const baseController_1 = __importDefault(require("./baseController"));
class PlayersController extends baseController_1.default {
    constructor() {
        super();
        this.path = '/players';
        this.router = express_1.default.Router();
        this.initRoutes = () => {
            this.router.get('/', this.getHP);
            this.router.get(this.path, this.getAllPlayers);
            this.router.get(`${this.path}/:id`, this.getPlayer);
            this.router.post(this.path, this.createPlayer);
            this.router.put(`${this.path}/:id`, this.updatePlayer);
        };
        this.getAllPlayers = (request, response) => {
            try {
                playerModel_1.default.find().then(allPLayers => {
                    response.status(200).json(allPLayers);
                });
            }
            catch (err) {
                response.status(500).json({ error: err });
            }
        };
        this.getPlayer = (request, response) => {
            try {
                playerModel_1.default.findOne({ _id: request.params.id }).then(player => {
                    response.status(200).json(player);
                });
            }
            catch (err) {
                response.status(500).json({ error: err });
            }
        };
        this.createPlayer = (request, response) => {
            try {
                const player = request.body;
                const createdPlayer = new playerModel_1.default(player);
                createdPlayer.save().then(savedPlayer => {
                    response.status(200).json(savedPlayer);
                });
            }
            catch (err) {
                response.status(500).json({ error: err });
            }
        };
        this.updatePlayer = (request, response) => {
            try {
                const player = request.body;
                playerModel_1.default.findByIdAndUpdate(request.params.id, player).then((updatedPlayer) => {
                    response.status(201).json(updatedPlayer);
                });
            }
            catch (err) {
                response.status(500).json({ error: err });
            }
        };
        this.path = '/players';
        this.initRoutes();
    }
    getHP(req, res) {
        res.status(200).json({ message: "welcome" });
    }
}
exports.default = PlayersController;
