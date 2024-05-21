import { Router } from "express";
import MarksController from "../../controller/marks/index.js";
const MarksRouter=Router()
MarksRouter.get("/marks",MarksController.getAllMarks)
MarksRouter.post("/marks",MarksController.postMarks)
MarksRouter.put("/marks/:id",MarksController.putMarks)
MarksRouter.delete("/marks/:id",MarksController.deleteMarks)

export default MarksRouter 