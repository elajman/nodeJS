const express = require('express')
const dataBase = require('./db')
const productRouter = require('./routers/products.router')
const cartRouter = require('./routers/cart.router')
const app = express()
const server = require('http').createServer(app)
const {server} = require('socket.io')
const exphbs = require('express-handlebars')
const {connection} = requiere('mongoose')
const PORT = process.env.PORT || 8080
const io = new Server (server)

// Configuro Handlebars template engine
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
app.set('views',__dirname+'/views')

app.use(productRouter)
app.use(cartRouter)

// archivos estaticos del directorio publico
app.use(express.static(__dirname+'/public'))
// administro las conexiones websocket
io.on('connection', (socket) => {
  console.log('A user connected')

/* renderizo home
app.get('/', (req, res) => {
  res.render('home', { products })
})*/

// renderizo productos en tiempo real
app.get('/realTimeProducts', (req, res) => {
  res.sendFile(__dirname+'/index.html')
})
app.get('socket.io',(req,res)=>{
  res.sendStatus(200);
})

  /*creacion de nuevo producto
  /socket.on('createProduct', (product) => {
    products.push(product)
    io.emit('products', products)
  })*/

  /* eliminacion de producto
  socket.on('deleteProduct', (productId) => {
    products = products.filter((product) => product.id !== productId);
    io.emit('products', products)
  })*/

  // manejo de desconexion 
  socket.on('disconnect', () => {
    console.log('A user disconnected')
  })
})

server.listen(PORT, () => {
  console.log('Server listening on port 8080')
  dataBase.connect()
})