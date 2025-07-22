const express = require('express');
const app = express();

const mongoose = require('mongoose');

const cors = require('cors');
app.use(cors());


const Item = require('./Item')

mongoose.connect('mongodb://localhost:27017/tienda');

app.get('/item', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})