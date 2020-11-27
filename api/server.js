const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.use('/',require('./src/routes'));


console.log('Server port 3030...');
app.listen(3030);

