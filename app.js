let express = require('express');
let http = require('http');
const ejs = require('ejs');
let app = express();
app.set = ('view engine', 'ejs');
let port = 2500 | process.env.port;
app.get('/shrishti', (req, res) => {
    res.render('../view/index.ejs');
})

http.createServer(app).listen(port, () => {
    console.log("port = " + port);
})