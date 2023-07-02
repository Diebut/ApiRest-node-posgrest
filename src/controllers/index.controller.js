const { Pool } = require('pg');

new Pool({
    
});

const getUsers = (req, res) =>{
    res.send('users');
}

module.exports ={
    getUsers
}