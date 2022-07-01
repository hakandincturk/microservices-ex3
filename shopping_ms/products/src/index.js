const express = require('express');
const { PORT } = require('./config');
const { databaseConnection } = require('./database');
const expressApp = require('./express-app');
const consola = require('consola');

const StartServer = async() => {

    const app = express();
    
    await databaseConnection();

    app.get('/fs', (req, res) => {
        resizeBy.json({type: true, message: 'successful'})
    });

    
    await expressApp(app);

    app.listen(PORT, () => {
        consola.success({message: `product service listening to port ${PORT}`, badge: true});
    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })
}

StartServer();