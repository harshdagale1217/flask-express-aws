const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello from Express Frontend!</h1>');
});

app.get('/home', (req, res) => {
    res.send('<h1>Welcome to the Home Page!</h1>');
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Express server running on port 3000');
});
