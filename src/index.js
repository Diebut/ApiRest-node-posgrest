const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
//const fetch = require('fetch');

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

app.get("/users", async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('select * from public."Usuarios"');
      const users = result.rows;
      client.release();
      res.send(users);
    } catch (error) {
      console.error("Error al obtener usuarios", error);
      res.status(500).send("Error al obtener usuarios");
    }
  });
  
  // Ruta para agregar un nuevo usuario
  app.post("/users", async (req, res) => {
    const { nombre, correo } = req.body;
  
    try {
      const client= await pool.connect();
      const result = await client.query('insert into public."Usuarios" (nombre, correo) values ($1, $2)', [nombre, correo]);
      client.release();
      res.sendStatus(201);
    } catch (error) {
      console.error("Error al agregar usuario", error);
      res.status(500).send("Error al agregar usuario");
    }
  });
  
  // Ruta para actualizar un usuario existente
  app.put("/users/:id", async (req, res) => {
    const { id } = req.params;
    const { nombre, correo } = req.body;
  
    try {
      const client = await pool.connect();
      const result = await client.query('update public."Usuarios" set nombre = $1, correo = $2 where id =$3', [nombre, correo, id]);
      client.release();
      res.sendStatus(200);
    } catch (error) {
      console.error("Error al actualizar usuario", error);
      res.status(500).send("Error al actualizar usuario");
    }
  });
  
  // Ruta para eliminar un usuario existente
  app.delete("/users/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const client = await pool.connect();
      const result = await client.query('delete from public."Usuarios" where id = $1', [id]);
      client.release();
      res.sendStatus(200);
    } catch (error) {
      console.error("Error al eliminar usuario", error);
      res.status(500).send("Error al eliminar usuario");
    }
  });


app.listen(port, ()=> //se agrego
    console.log(`Dieguito index.js listeng at http://localhost:${port}`)
);
