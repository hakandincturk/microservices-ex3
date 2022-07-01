const ProductService = require('../services/product-service');
const consola = require('consola');

module.exports = async (app) => {

  app.use('/app-events', async (req, res, next) => {
    const { payload } = req.body;
    consola.success({message: '==== Product Service receoved Event ===='});

    return res.status(200).json({type: true, message: 'successful', data: payload});

  });
}