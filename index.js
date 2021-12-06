const express = require('express');
const connect = require('./database/connection')
const bodyParser = require('body-parser')
const cors = require('cors')
var session = require('express-session')

const app = express();

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers',
    "Origin, X-requested-With, Content-Type, Accept, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    res.setHeader('Access-Control-Allow-Methods',
    "GET, POST, PATCH, DELETE, OPTIONS, PUT")
    next();
})
app.use(cors())

// Sessão
app.use(session({ secret: 'sad33c434f24f23rc23wevrbt5y67nu6', cookie: {maxAge: 60000}}))

// Rotas
app.use('/products', require('./controllers/productsController'))
app.use('/user', require('./controllers/userController'))

// Inicializar o servidor
app.listen(PORT, async ()=>{
    await connect();
    console.log('Servidor iniciado!')
})