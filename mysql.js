const { log } = require('console');
const mysql = require('mysql')




const connection = mysql.createConnection({
    host:'localhost',
    user:'gatitos',
    password:'114455',
    database:'gatitosayudantiaa'
})

connection.connect((err)=> {
    if(err) throw err
    console.log('conexion establecida')
})

connection.query('select * from vuelos', (err, rows)=> {
    if(err) throw err
    console.log('los datos solicitados son:')
    console.log(rows)
})

connection.query('select * from clientes', (err, rows)=> {
    if(err) throw err
    console.log('los datos solicitados son:')
    console.log(rows)
})

connection.query('select * from reservas', (err, rows)=> {
    if(err) throw err
    console.log('los datos solicitados son:')
    console.log(rows)
})




connection.end()