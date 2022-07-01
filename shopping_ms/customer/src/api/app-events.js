const CustomerService = require('../services/customer-service');
const consola = require('consola');

module.exports = async (app) => {
  const service = new CustomerService();

  app.use('/app-events', async (req, res, next) => {
    const { payload } = req.body;

    service.SubscribeEvents(payload);
    consola.success({message: '==== Shopping Service receoved Event ===='});

    return res.status(200).json({type: true, message: 'successful', data: payload});

  });
}