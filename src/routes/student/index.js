import { Router } from "express";
import studentController from "../../controller/student/index.js";
const studentRouter=Router();

// getting all students stored in array
  studentRouter.get("/students", studentController.getAllStudent);
// getting studnt by id
  studentRouter.get("/student/:id", studentController.getSingleStudent);
//  create new student  
  studentRouter.post("/student",studentController.postStudent)
//  put or update the data
   studentRouter.put("/student/:id",studentController.putStudent)

   studentRouter.delete("/student/:id",studentController.deleteStudent)


  //  studentRouter.putUpdateStudent("/studentUpdate/:id",studentController.putUpdateStudent)

  
//  delete student
   studentRouter.delete("/student/:id",studentController.deleteStudent )

   export default studentRouter;