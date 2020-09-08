import express = require("express");

const app: express.Application = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send("Hello world!")
});

app.listen(PORT, () => {
    console.log(`App listen on port ${PORT}`)
});

export { app };