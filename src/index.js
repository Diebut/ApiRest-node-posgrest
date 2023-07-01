const express = require('express');
const app = express();

//routes
app.use(require('./routes/index'));

app.listen(3000);
console.log('Server on port 3000');