const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//para control de ambientes
require('dotenv').config({path: 'src/env/.env.'+process.env.NODE_ENV});
console.log('RUNNING ENVIROMENT: ', process.env.NODE_ENV);

const port = process.env.PORT;

//para que reconozca el body de las url
app.use(bodyParser.urlencoded({extended:false}));
//para que el body de las url lleguen en formato json
app.use(bodyParser.json());

//conexion a la base de datos
require('./src/conn/mongo_conn');

//asocacion del modulo al app
app.use('/auth', require('./src/modules/users/auth.routes'));
app.use('/clothe', require('./src/modules/clothes/clothes.routes'));
app.use('/order', require('./src/modules/orders/orders.routes'));

//levanta el servidor
app.listen(port, () => {
  console.log('Server runing on port ' + port);
});


