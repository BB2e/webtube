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

/*
    DAY 3 과제용
    - URL Logger: 이 미들웨어는 방문 중인 URL을 기록(log) 해야 합니다.
    - Time Logger: 이 미들웨어는 요청(request)의 년, 월, 일을 기록해야 합니다.
    - Security Logger: 이 미들웨어는 프로토콜이 https이면 secure이라고 기록하고, 그 외의 경우 insecure라고 기록해야 합니다.
    - Protector Middleware: 이 미들웨어는 사용자가 /protected로 이동하려고 할 경우 이동하지 못하도록 해야 합니다.
*/

const urlLogger = (req, res, next) => {
    console.log(`Path: ${req.url}`)
    next();
}

const timeLogger = (req, res, next) => {
    const d = new Date();
    console.log(`Time: ${d.getFullYear()}.${d.getMonth()}.${d.getDate()}`)
    next();
}

const securityLogger = (req, res, next) => {
    if(req.protocol === 'https'){
        console.log(`secure`)
    } else {
        console.log(`insecure`)
    }
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
// app.use(logger)
// app.use(privateMiddleware)

app.use(urlLogger)
app.use(timeLogger)
app.use(securityLogger)
app.use(privateMiddleware)

// 2. 특정 라우터, middleware, finalware
// app.get("/", logger, handleHome) 
app.get("/", handleHome)
app.get("/protected", handleProtected)

const handleListening = () => console.log(`server listening on port http://localhost:${PORT} 🎉`)

app.listen(PORT, handleListening) // port number, callback

// ------------
// app.get("/", (req, res) => res.send("<h1>Home</h1>"));
// app.get("/protected", (req, res) => res.send("<h1>Protected</h1>"));

// Codesandbox gives us a PORT :)
// app.listen(process.env.PORT, () => `Listening!✅`);