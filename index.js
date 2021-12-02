const express = require('express');
const connect = require('./database/connection')

const app = express();

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers',
    "Origin, X-requested-With, Content-Type, Accept, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    res.setHeader('Access-Control-Allow-Methods',
    "GET, POST, PATCH, DELETE, OPTIONS, PUT")
    next();
})

app.use('/products', require('./controllers/productsController'))

app.listen(PORT, async ()=>{
    await connect();
    console.log('Servidor iniciado!')
})