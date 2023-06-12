const express = require('express')
const app = express()
const http = require('http')
const handlebars = require('express-handlebars')
const routerHome = require('./routes/home.router')
const server = http.createServer(app)

//configuracion de socket ioo
const io = new Server(server)

app.use(express.static(__dirname+'/public'))

io.on('connection', (socket) => {
    console.log('nuevo usuario conectado')
    socket.emit('menssage', 'Hola cliente Bienvenido')
    socket.on('new-message', (data) => {
        console.log(data)
        message.push(data)
        io.sockets.emit('message', message)
        // socket.emit('message', message)
    })
})

//JS de parte del cliente

//configuracion de handlebars
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', __dirname+'/views')

let message = []

//inicializr rutas
app.use('/home', routerHome)

app.listen(8080, () => {
    console.log('server ok')
})