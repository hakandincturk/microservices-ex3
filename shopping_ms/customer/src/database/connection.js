const mongoose = require('mongoose');
const { DB_URL, PORT } = require('../config');

module.exports = async() => {

    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Db Connected');
        
    } catch (error) {
        console.log('Error ============')
        console.log(error.message);
        process.exit(1);
    }
 
};

 