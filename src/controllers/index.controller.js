const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: 'Nodejs_PG',
    port: '5432'
});

const getUsers = (req, res) =>{
    res.send('users');
}

module.exports ={
    getUsers
}