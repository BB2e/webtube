// const express = require("express");
// const app = express();

import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
    return res.send('Home!!');
    // return res.end();
}

const handleLogin = (req, res) => {
    return res.send('login page!!');
}

const handleContact = (req, res) => {
    return res.send('contact page!!');
}

const handleAbout = (req, res) => {
    return res.send('about page!!');
}

app.get("/", handleHome)
app.get("/login", handleLogin)
app.get("/contact", handleContact)
app.get("/about", handleAbout)

const handleListening = () => console.log(`server listening on port http://localhost:${PORT} 🎉`)

app.listen(PORT, handleListening) // port number, callback