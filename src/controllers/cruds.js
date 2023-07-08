const e = require('express');
const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'zxc123',
    database: 'Formulario',
    port: '5432'
});

const getUsers = async (req, res) =>{
    const response = await pool.query('select * from public."Usuarios"');
    res.status(200).json(response.rows);
}

const getUserById = async (req, res) =>{
    const id = req.params.id;
    const response = await pool.query('select * from public."Usuarios" where id = $1', [id]);
    res.json(response.rows);
}
const createUser = async(req, res) =>{
    const { nombre, correo } = req.body;

    const response = await pool.query('insert into public."Usuarios" (nombre, correo) values ($1, $2)', [nombre, correo]);
    console.log(response);
    //res.send('user created');
    res.json({
        message:'Usuario agregado satisfatoriamente', //mensaje
        body:{                                        
            user:{nombre, correo} //le voy a devolver el dato que me ha enviado
        }
    });
};
const updateUser = async(req, res) =>{
    const id = req.params.id;
    const {nombre, correo} = req.body;
    const response = await pool.query('update public."Usuarios" set nombre = $1, correo = $2 where id =$3', [nombre, correo, id]);
    console.log(response);
    res.json('User update satisfactoriamente');
}

const deleteUser = async(req, res) =>{
 //res.send('Usuario delete ' + req.params.id);
    const id = req.params.id;
    const response = await pool.query('delete from public."Usuarios" where id = $1', [id]);
    console.log(response);
    res.json(`User ${id} deleted satisfactoriamente`);

}
module.exports ={
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}