const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'zxc123',
    database: 'nodejs_pg',
    port: '5432'
});

const getUsers = async (req, res) =>{
    const response = await pool.query('select * from users');
    res.status(200).json(response.rows);
}

const getUserById = async (req, res) =>{
    const id = req.params.id;
    const response = await pool.query('select * from  users where id = $1', [id]);
    res.json(response.rows);
}
const createUser = async(req, res) =>{
    const { name, email } = req.body;

    const response = await pool.query('insert into users (name, email) values ($1, $2)', [name, email]);
    console.log(response);
    //res.send('user created');
    res.json({
        message:'Usuario agregado satisfatoriamente', //mensaje
        body:{                                        
            user:{name, email} //le voy a devolver el dato que me ha enviado
        }
    });
};
const updateUser = async(req, res) =>{
    const id = req.params.id;
    const {name, email} = req.body;
    console.log(id, name, email);
    res.json('User update');
}

const deleteUser = async(req, res) =>{
 //res.send('Usuario delete ' + req.params.id);
    const id = req.params.id;
    const response = await pool.query('delete from users where id = $1', [id]);
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