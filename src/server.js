import express from "express";

const PORT = 4000;

const app = express();

const handleHome = () => console.log("Somebody is trying to go hone.");

app.get("/", handleHome);

const handleListening = () => console.log(`Server listening on http://localhost:${PORT}.`);

app.listen(4000, handleListening);