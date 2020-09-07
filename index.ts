import express = require("express");

const app: express.Application = express();

app.get('/', (req, res) => {
    res.send("Hello world!")
});

app.listen(3000, () => {
    console.log("App listen on port 3000")
});