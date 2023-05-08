import App from './app'
import PlayersController from './controllers/players';
import TeamsController from './controllers/teams';

const app:App = new App(
    [
        new PlayersController(),
        new TeamsController()
    ], 
    5500
    )

app.listen();