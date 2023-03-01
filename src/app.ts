import express from 'express';
import routes from './routes';
import morganMiddleware from './lib/morgan';

class App {
    public server;

    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(morganMiddleware);
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;