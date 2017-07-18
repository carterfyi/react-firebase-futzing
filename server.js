const express = require('express');
const app = express();

app.get('*', function(req, res) {
    res.end("Hello World");
});

app.listen(3000, () => {
    console.log("App Listening on Port 3000");
});