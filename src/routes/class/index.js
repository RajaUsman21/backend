import { Router } from "express";
import classController from "../../controller/class/index.js";
const classRouter=Router()
classRouter.get("/classes",classController.getClass)

export default classRouter