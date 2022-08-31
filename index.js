// const express = require("express");
// const app = express();

import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
    // console.log(`${req.method} ${req.url}`)
    console.log(`Path: ${req.url}`)
    next();
}

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if (url === "/protected") {
        return res.send("<h1>Not Allowed</h1>")
    }
    // console.log("Access allowed!")
    next();
}

const handleHome = (req, res) => {
    // return res.send('Home!!');
    return res.end();
}

const handleProtected = (req, res) => {
    return res.send('Welcome to private lounge');
}

// 1. 모든 route에서 쓸수있는 global middleware
app.use(logger)
app.use(privateMiddleware)


// 2. 특정 라우터, middleware, finalware
// app.get("/", logger, handleHome) 
app.get("/", handleHome)
app.get("/protected", handleProtected)

const handleListening = () => console.log(`server listening on port http://localhost:${PORT} 🎉`)

app.listen(PORT, handleListening) // port number, callback
