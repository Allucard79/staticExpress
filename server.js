const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile('/index.html');
    res.sendFile('/style.css');
});

app.get('/userform', (req, res) => {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.end(JSON.stringify(response));
});
app.use(express.static('./assets'));

const server = app.listen(3000, '127.0.0.1', () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log(`Przykładowa aplikacja nasłuchuje na http://${host} : ${port}`);
});