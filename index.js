const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const exphbs = require('express-handlebars');

// Configuro Handlebars template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Creo lista de productos
let products = [
  { id: 1, name: 'Mtb Trek' },
  { id: 2, name: 'Mtb Specialized' },
  { id: 3, name: 'Mtb Cannondale' }
];

// archivos estaticos del directorio publico
app.use(express.static('public'));

// renderizo home
app.get('/', (req, res) => {
  res.render('home', { products });
});

// renderizo productos en tiempo real
app.get('/realTimeProducts', (req, res) => {
  res.render('realTimeProducts', { products });
});

// administro las conexiones websocket
io.on('connection', (socket) => {
  console.log('A user connected');

  // Envio lista de productos al cliente conectado
  socket.emit('products', products);

  //creacion de nuevo producto
  socket.on('createProduct', (product) => {
    products.push(product);
    io.emit('products', products);
  });

  // eliminacion de producto
  socket.on('deleteProduct', (productId) => {
    products = products.filter((product) => product.id !== productId);
    io.emit('products', products);
  });

  // manejo de desconexion 
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const PORT = 3000;
http.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});