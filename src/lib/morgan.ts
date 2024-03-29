import morgan, { StreamOptions } from "morgan";
import Logger from "./logger";

const stream: StreamOptions = {
    write: (message) => Logger.http(message),
};

// Skip all the Morgan http log if the 
// application is not running in development mode.
const skip = () => {
    const env = process.env.NODE_ENV || "development";
    return env !== "development";
};

const morganMiddleware = morgan(
    ":method :url :status :res[content-length] - :response-time ms",
    { stream, skip }
);

export default morganMiddleware;