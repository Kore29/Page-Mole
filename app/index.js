const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Esto es una prueba')
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})