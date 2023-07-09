const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('fetch');

const port = process.env.PORT || 4000; //se agrego

//middlewares
//app.use(express.json());// se encarga de una app cliente envie el formato json
//app.use(express.urlencoded({extended: false})); //permite esta funcion cuando envie un dato en formulario es capaz procesarlo y enviarlo en un object y false para aceptar datos simples no imagenes

app.set('json spaces', 4); // es para q se vea el json en forma vertical ordenado en la pagina web
app.use(bodyParser.urlencoded({extended: false}));  //nuevo se agrego
app.use(bodyParser.json()); //nuevo se agrego
app.use(cors()); //nuevo se agrego

//routes
app.use(require('./routes/index'));

// app.listen(4000);
//console.log('Server on port 4000');
 
app.get("/", (req, res)=>{ // se agrego
    res.send("Hola Diegooolll agrega la ruta requerida...")
})

app.listen(port, ()=> //se agrego
    console.log(`Dieguito index.js listeng at http://localhost:${port}`)
);
