import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger  = morgan("dev");
app.use(logger)

// url 라우터별로 분리해줌
const globalRouter = express.Router();
const handleHome = (req, res) => res.send("Home")
globalRouter.get("/", handleHome)

const userRouter = express.Router();
const handleEditUser = (req, res) => res.send("Edit User")
userRouter.get("/edit", handleEditUser)

const videoRouter = express.Router();
const handlewatchVideo = (req, res) => res.send("watch video")
videoRouter.get("/watch", handlewatchVideo)



app.use("/", globalRouter)
app.use("/videos", videoRouter)
app.use("/users", userRouter)

// const handleHome = (req, res) => {
//     // return res.send('Home!!');
//     return res.end();
// }

// 1. 모든 route에서 쓸수있는 global middleware111


// 2. 특정 라우터, middleware, finalware
// app.get("/", handleHome)

const handleListening = () => console.log(`server listening on port http://localhost:${PORT} 🎉`)

app.listen(PORT, handleListening) // port number, callback
