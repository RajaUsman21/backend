import { Router } from "express";
import MarksController from "../../controller/marks/index.js";
const MarksRouter=Router()
MarksRouter.get("/marks",MarksController.getMarks)
MarksRouter.post("/marks",MarksController.postMarks)
MarksRouter.put("/marks/:grade",MarksController.putMarks)
MarksRouter.delete("/marks/:grade",MarksController.deleteMarks)

export default MarksRouter 