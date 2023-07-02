const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: 'Nodejs_PG',
    port: '5432'
});

const getUsers = async (req, res) =>{
    const response = await pool.query('select * from users');
    console.log(response.rows);
    res.send('users');
}

module.exports ={
    getUsers
}