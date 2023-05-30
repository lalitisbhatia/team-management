"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const players_1 = __importDefault(require("./controllers/players"));
const teams_1 = __importDefault(require("./controllers/teams"));
const app = new app_1.default([
    new players_1.default(),
    new teams_1.default()
], 8000);
app.listen();
