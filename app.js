const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.resolve(__dirname, './public')));


app.get('/detallesDeProductos', (req, res) => res.sendFile(path.resolve(__dirname, './views/productDetail.html')));
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname, './views/login.html')));
app.get('/register', (req, res) => res.sendFile(path.resolve(__dirname, './views/register.html')));
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, './views/home.html')));
app.get('/carrito', (req, res) => res.sendFile(path.resolve(__dirname, './views/carrito.html')));

app.listen(process.env.PORT || 3000, () => console.log("Servidor corriendo en Puerto: 3000"));
