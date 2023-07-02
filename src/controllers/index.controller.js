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

module.exports ={
    getUsers
}