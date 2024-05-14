import classRouter from "./class/index.js";
import MarksRouter from "./marks/index.js";
import studentRouter from "./student/index.js";
import TeacherRouter from "./teacher/index.js";
import WrongApiRouter from "./wrongAPI/index.js";

const AllRouters=[
    studentRouter,
    TeacherRouter,
    MarksRouter,
    WrongApiRouter,
    classRouter
]
export default AllRouters