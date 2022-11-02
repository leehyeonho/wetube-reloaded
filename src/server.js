import express from "express";

const PORT = 4000;

const app = express();

const  gossipMiddleware = (req, rse, next) => {
    console.log(`Someone is going to: ${req.url}`);
    next();
}

const handleHome = (req, res) => {
    return res.send("I still love you.");
};
const handleLogin = (req, res) => {
    return res.send("Login here.");
};
app.get("/", gossipMiddleware, handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`Server listening on http://localhost:${PORT}.`);

app.listen(PORT, handleListening);