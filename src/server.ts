import App from './app'
import PlayersController from './controllers/players';
import TeamsController from './controllers/teams';
import { getPORT } from './utils/envHelper'; "./utils/envHelper"
console.log(getPORT())
const app:App = new App(
    [
        new PlayersController(),
        new TeamsController()
    ], 
    getPORT()
    )

app.listen();