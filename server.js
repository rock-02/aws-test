const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/api/message", (req, res) => {
    res.json({
        message: "Hello from Node.js running on AWS EC2!"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});