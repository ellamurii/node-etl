import express from 'express';
import swaggerUi from "swagger-ui-express";
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
        this.server.use(express.static("public"));
        this.server.use(
            "/docs",
            swaggerUi.serve,
            swaggerUi.setup(undefined, {
                swaggerOptions: {
                    url: "/swagger.json",
                    info: {
                        title: 'rawr'
                    }
                },
            })
        );
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;