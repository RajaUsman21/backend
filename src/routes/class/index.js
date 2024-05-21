import { Router } from "express";
import classController from "../../controller/class/index.js";
const classRouter=Router()
classRouter.get("/class",classController.getClass)
classRouter.post("/postclass",classController.postClass)

export default classRouter