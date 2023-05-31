"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv").config();
class App {
    // public router;
    constructor(controllers, port) {
        this.initializeMiddlewares = () => {
            this.app.use(body_parser_1.default.json());
        };
        this.initializeControllers = ((controllers) => {
            controllers.forEach((controller) => {
                this.app.use('/', controller.router);
            });
        });
        this.listen = () => {
            this.app.listen(this.port, () => {
                console.log(`App listening on port ${this.port}`);
            });
        };
        this.initializeDBConnection = () => {
            mongoose_1.default.connect('mongodb://tm-db-user:tmdbu$3r@team-management:27017/team-management');
            const db = mongoose_1.default.connection;
            db.on("error", console.error.bind(console, "connection error: "));
            db.once("open", function () {
                console.log("Connected successfully");
            });
        };
        this.app = (0, express_1.default)();
        this.port = port;
        this.initializeMiddlewares();
        this.initializeDBConnection();
        this.initializeControllers(controllers);
    }
}
exports.default = App;
// import {router } from './routes'
// const app: Application = express();
// const PORT: number = 5500;
// app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
// app.use('/',router)
// app.use('/other',router)
// app.use('/calc',router)
// app.listen(PORT,() =>{
//     console.log(`app server is running on port ${PORT}`)
// })
