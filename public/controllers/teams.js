"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const teamModel_1 = __importDefault(require("../interfaces/teamModel"));
const baseController_1 = __importDefault(require("./baseController"));
class TeamsController extends baseController_1.default {
    // public path = "/teams";
    // public router = express.Router();
    // private Teams: Team[] = teams;
    constructor() {
        super();
        this.initRoutes = () => {
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
        this.path = "/teams";
        this.initRoutes();
    }
}
exports.default = TeamsController;
