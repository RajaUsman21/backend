import 'dotenv/config'
import express from "express";
import AllRouters from "./routes/index.js";
import { connectDb } from "./db/config.js";
// import studentController from "./controller/student/index.js";

// import teacherController from "./controller/teacher/index.js";
// import teacherController from "./controller/teacher/index.js";
// import studentRouter from "./routes/student/index.js";
// import TeacherRouter from "./routes/teacher/index.js";
// import WrongApiRouter from "./routes/wrongAPI/index.js";
// import MarksRouter from "./routes/marks/index.js";
// import classRouter from "./routes/class/index.js";
const app = express();
app.use(express.json())
connectDb()

// app.use(studentRouter);
// app.use(TeacherRouter)
// app.use(MarksRouter)
// app.use(WrongApiRouter)
// app.use(classRouter)


app.use(AllRouters);
  app.listen(3000, () => {
    console.log("Server is again restarted:3000");
});


// app.get("/student",(req,res)=>{
// res.json({
//     name:"usman",
//     id:"1",
//     city:"Kharian"
// })
// })
// app.get("/student",(req,res)=>{
//     res.json({
//         name:"usman raja",
//         id:"8",
//         city:"Kharian"
//     })
//     })
    

// app.post("/student",(req,res)=>{
//     res.json({
//         id:"2",
//         name:"ali shan",
//         city:"gujrat"
//     })
    
// })
// app.put("/student",(req,res)=>{
//     res.json({
//         name:"hamza",
//         id:"3",
//         city:"bhimber"
//     })
// })
// app.patch("/student",(req,res)=>{
//     res.json({
//         name:"sohaib",
//         id:"4",
//         city:"burewala"
//     })
// })
// app.delete("/:student",(req,res)=>{
//     const student=req.params.student
// })
// app.listen(3000, () => {
//     console.log("Server is again Srestarted");
// });








// app.get("/", (req, res) => {
//     res.json({
//         apiName: "this is my first and only api"
//     });
// });

// app.get("/api1", (req, res) => {
//     res.json({
//         Name: "Hi, my name is Usman"
//     });
// });

// app.get("/api2", (req, res) => {
//     res.json({
//         city: "I am from Kharian city"
//     });
// });

// app.get("/api3", (req, res) => {
//     res.json({
//         age: "I am 24 years old at this time"
//     });
// });

// app.get("/api4", (req, res) => {
//     res.json({
//         email: "rajausman4201@gmail.com"
//     });
// });
// app.get("/api4", (req, res) => {
//     res.json({
//         nameS: "rajausman21@gmail.com"
//     });
// });


