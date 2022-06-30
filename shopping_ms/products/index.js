const express = require('express');
const consola = require('consola');

const app = express();

app.use(express.json());

app.get('/', (req, res, next) => {
  return res.status(200).json({type: true, message: 'successful'})
})

app.listen(8002, () => {
  consola.success({message: 'product service running on 8002', badge: true});
});