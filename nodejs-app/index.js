require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`listening to port: ${PORT}`));

app.get("/api/test", (req, res) => {
    res.json({ message: "hello world!" });
});
