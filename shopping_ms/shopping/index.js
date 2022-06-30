const express = require('express');
const consola = require('consola');

const app = express();

app.use(express.json());

app.get('/', (req, res, next) => {
  return res.status(200).json({type: true, message: 'successful'})
})

app.listen(8003, () => {
  consola.success({message: 'shopping service running on 8003', badge: true});
});