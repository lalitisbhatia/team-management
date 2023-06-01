"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const teamModel_1 = __importDefault(require("../interfaces/teamModel"));
class TeamsController {
    // private Teams: Team[] = teams;
    constructor() {
        this.path = "/teams";
        this.router = express_1.default.Router();
        this.initializeRoutes = () => {
            this.router.get(this.path || "/", this.getAllTeams);
            this.router.post(this.path, this.createTeam);
        };
        this.getAllTeams = (request, response) => {
            try {
                teamModel_1.default.find().then(allTeams => {
                    response.status(200).json(allTeams);
                });
            }
            catch (err) {
                response.status(500).json({ error: err });
            }
        };
        this.createTeam = (request, response) => {
            try {
                const team = request.body;
                const createdTeam = new teamModel_1.default(team);
                createdTeam.save().then(savedTeam => {
                    response.status(201).json(savedTeam);
                });
            }
            catch (err) {
                response.status(500).json({ error: err });
            }
        };
        this.initializeRoutes();
    }
}
exports.default = TeamsController;
