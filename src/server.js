// express 된것과 configuration에 관련된 코드만 처리
// 나머지는 init.js로 옮김

import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter"
import userRouter from "./routers/userRouter"
import videoRouter from "./routers/videoRouter"

const app = express();
const logger  = morgan("dev");

// pug를 사용하는 방법 1. npm i pug 2. app.set 세팅 3.퍼그 파일 만들고 넣기
app.set("view engine", 'pug') // http://expressjs.com/ko/guide/using-template-engines.html
app.set("views", process.cwd() + "/src/views") 
// ㄴ> package.json이 node의 current working directory이기에, 
// 거기서 views를 찾으면 없어서
// 현재 pug가 있는 views 폴더를 알려준다
app.use(logger)

// HTML form을 이해할수있게 JS obj로 변환해주는 middleware 설정
app.use(express.urlencoded({extended:true}))

app.use("/", globalRouter)
app.use("/videos", videoRouter)
app.use("/users", userRouter)

export default app;