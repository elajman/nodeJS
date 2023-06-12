let socket = io()

socket.on('menssage', (data) => {
    console.log(data)
    socket.emit('msg', 'Muchas gracias por la Bienvenida')
    
    })
    socket.on('message', (data) => {
        console.log(data)
        render(data)
})

function render(data){
    const html = data.map(elem => {
        return(
            `
            <div>
            <strong>${elem.author}}</strong>
            <em>${elem.text}</em>
            </div>
            `)
    }).join(' ')

    document.getElementById('caja').innerHTML = html
}


function addMessage(){
    const mensaje = {
        autor: document.getElementById('username').value,
        text: document.getElementById('texto').value
    }
    console.log(mensaje)
    socket.emit('new-message', mensaje)
    return false
}