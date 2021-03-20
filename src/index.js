const express = require('express');
const app = express();

//Settings
var port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5501");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

//Middlewares
app.use(express.json());

//Routes
app.use(require('./routes/product'));

app.listen(app.get('port'), () => {
    console.log('Server on port 3000', app.get('port'));
});
