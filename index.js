const express = require("express");
const { UserRouter } = require("./user.router");
const app = express();
app.get("/", (req, res) => {
    res.send("Express on Vercel 4");
});

app.get("/about", (req, res) => {
    res.send("Express on Vercel 4 about route");
});

app.get("/user", (req, res) => {
    res.send("Express get user route");
});

app.post("/user", (req, res) => {
    res.send("Express create user route");
});

app.get("/user/all", (req, res) => {
    res.send("Express get all users route");
});

app.use('/cust', UserRouter)



app.listen(5000, () => {
    console.log("Running on port 5000.");
});
// Export the Express API
module.exports = app;
