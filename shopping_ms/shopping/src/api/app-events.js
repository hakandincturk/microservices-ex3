const ShoppingService = require('../services/shopping-service');
const consola = require('consola');

module.exports = async (app) => {
  const service = new ShoppingService();

  app.use('/app-events', async (req, res, next) => {
    const { payload } = req.body;

    consola.success({message: '==== Shopping Service receoved Event ===='});
    service.SubscribeEvents(payload);

    return res.status(200).json({type: true, message: 'successful', data: payload});

  });
}