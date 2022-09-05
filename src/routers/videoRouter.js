import express from "express";
import { edit, see, upload, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", see)
// :변수 >> express에게1 변수를 넣는 다는걸 알려줌
// videos/:12/edit11
videoRouter.get("/:id(\\d+)/edit", edit)
videoRouter.get("/:id(\\d+)/delete", deleteVideo)
videoRouter.get("/upload", upload)

export default videoRouter;
