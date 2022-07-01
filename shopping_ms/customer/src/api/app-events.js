const CustomerService = require('../services/customer-service');
const consola = require('consola');

module.exports = async (app) => {
  const service = new CustomerService();

  app.use('/app-events', async (req, res, next) => {
    const { payload } = req.body;

    console.log("customer->app-events.js", payload)

    consola.success({message: '==== Customer Service receoved Event ===='});
    service.SubscribeEvents(payload);

    return res.status(200).json({type: true, message: 'successful', data: payload});

  });
}