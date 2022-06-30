const express = require('express');
const cors = require('cors');
const consola = require('consola');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res, next) => {
  return res.status(200).json({type: true, message: 'successful'})
})

app.listen(8001, () => {
  consola.success({message: 'customer service running on 8001', badge: true});
});