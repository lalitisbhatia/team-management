import App from './app'
import PlayersController from './controllers/players';
import TeamsController from './controllers/teams';

const app:App = new App(
    [
        new PlayersController(),
        new TeamsController()
    ], 
    8000
    )

app.listen();