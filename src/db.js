// db 연결해주는 파일

import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/webtube', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

const handleOpen = ()=> console.log("connected to db")

db.on("error", (error)=>console.log('db error', error));
db.once("open", handleOpen);