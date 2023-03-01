import app from './app'
import Logger from './lib/logger/index';
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    Logger.debug(`Server is up and running on port: ${PORT}`);
});