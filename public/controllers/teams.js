"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const teams_1 = __importDefault(require("../data/teams"));
class TeamsController {
    constructor() {
        this.path = "/teams";
        this.router = express_1.default.Router();
        this.Teams = teams_1.default;
        this.initializeRoutes = () => {
            this.router.get(this.path || "/", this.getAllTeams);
            this.router.post(this.path, this.createTeam);
        };
        this.getAllTeams = (request, response) => {
            try {
                response.status(200).json(this.Teams);
            }
            catch (err) {
                response.status(500).json({ error: err });
            }
        };
        this.createTeam = (request, response) => {
            try {
                const team = request.body;
                teams_1.default.push(team);
                response.status(201).json(team);
            }
            catch (err) {
                response.status(500).json({ error: err });
            }
        };
        this.initializeRoutes();
    }
}
exports.default = TeamsController;
