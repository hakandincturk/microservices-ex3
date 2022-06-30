const express = require('express');
const consola = require('consola');
const proxy = require('express-http-proxy');

const app = express();

app.use(express.json());

app.use('/customer', proxy('http://localhost:8001'))
app.use('/product  ', proxy('http://localhost:8002'))
app.use('/shopping', proxy('http://localhost:8003'))


app.listen(8000, () => {
  consola.success({message: 'gateway running on 8000', badge: true});
});