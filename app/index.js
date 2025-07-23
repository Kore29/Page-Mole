const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Item = require("./Item");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/itemsdb')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error conectando a MongoDB:', err));

app.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.post("/", async (req, res) => {
  const newItem = new Item({ name: req.body.name });
  await newItem.save();
  res.json({ message: 'Item añadido' });
});

app.delete("/item/:id", async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: 'Item eliminado' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
