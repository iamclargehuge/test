
const express = require('express');
const app = express();


app.get('/', (req, res) => {

    res.send('Stevo was here');

});

app.listen(3000,() => console.log('Listening on port 3000...'));

