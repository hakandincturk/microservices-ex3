const express = require('express');
const { PORT } = require('./config');
const { databaseConnection } = require('./database');
const expressApp = require('./express-app');
const consola = require('consola');
const { CreateChannel } = require('./utils');

const StartServer = async() => {

    const app = express();
    
    await databaseConnection();

    const channel = await CreateChannel();
    
    await expressApp(app, channel);

    app.listen(PORT, () => {
        consola.success({message: `product service listening to port ${PORT}`, badge: true});
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
}

StartServer();