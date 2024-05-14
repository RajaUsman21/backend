import { Router } from "express";
import teacherController from "../../controller/teacher/index.js";
const TeacherRouter=Router();

TeacherRouter.get("/teachers",teacherController.getAllTeachers)
TeacherRouter.get("/teacher/:id",teacherController.getSingleTeacher)
TeacherRouter.post("/teacher",teacherController.postTeacher)
TeacherRouter.put("/teachers/:id",teacherController.putTeacher)
TeacherRouter.delete("/teacher/:id",teacherController.deleteTeacher)

export default TeacherRouter