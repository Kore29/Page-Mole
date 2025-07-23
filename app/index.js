const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Item = require("./Item");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/itemsdb')
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

// Example
async function crearProductosIkea() {
  const productosIkea = [
    {
      name: "Lámpara HEKTAR",
      description: "Lámpara de pie con pantalla metálica, negra",
      quantity: 10,
      price: 49.99,
      category: "iluminación",
      isAvailable: true,
    },
    {
      name: "Silla MARKUS",
      description: "Silla de oficina ergonómica, negro",
      quantity: 5,
      price: 199.99,
      category: "muebles",
      isAvailable: true,
    },
  ];

  for (const producto of productosIkea) {
    const existe = await Item.findOne({ name: producto.name });
    if (!existe) {
      const nuevoItem = new Item(producto);
      await nuevoItem.save();
      console.log(`Producto creado: ${producto.name}`);
    } else {
      console.log(`Producto ya existe: ${producto.name}`);
    }
  }
}

crearProductosIkea();
// Example

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
