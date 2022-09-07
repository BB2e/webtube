import express from "express";
import { getEdit, postEdit, watch, getUpload, postUpload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch)
// :변수 >> express에게1 변수를 넣는 다는걸 알려줌
// videos/:12/edit11

videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit)

videoRouter.route("/upload").get(getUpload).post(postUpload)

export default videoRouter;
