const express = require('express');
const app = express();

//middlewares
app.use(express.json());// se encarga de una app cliente envie el formato json
app.use(express.urlencoded({extended: false})); //permite esta funcion cuando envie un dato en formulario es capaz procesarlo y enviarlo en un object y false para aceptar datos simples no imagenes

//routes
app.use(require('./routes/index'));

app.listen(3000);
console.log('Server on port 3000');