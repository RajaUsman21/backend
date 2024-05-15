import StudentModel from "../../model/student/index.js";

  const studentController={
    getAllStudent:(req, res) => {
        res.json(students)
      },
    getSingleStudent:(req, res) => {
        const id = req.params.id;
        const student = students.find(student => student.id === id);
      if (student) {
        res.json(student);
      } else {
        res.status(404).json({ error: "Student not found" });
      }
    },
    postStudent: async (req,res)=>{
      try {
          const newStudent = req.body;
          const student= await StudentModel.create({
            firstName:newStudent.firstName,
            lastName:newStudent.lastName,
            phone:newStudent.phone,
          });
          res.status(200).json({message:"student created"})
        
      } catch (error) {
        // console.log(error)
          res.status(500).json({ error: "Failed to add student",});
      }
  
  },
      putStudent:(req, res) => {
        const id=req.params.id
        students[id]=req.body
            console.log(students);
            res.json({students})
       },
   
  //  putUpdateStudent: (req, res) => {
  //   students[0]=req.body
  //       console.log(students);
  //       res.json({students})
  //  } ,
deleteStudent: (req, res) => {
  const id = req.params.id;
  const index = students.findIndex(student => student.id === id);
  if (index !== -1) {
      students.splice(index, 1);
      res.json({ message: "Student deleted successfully" ,students});
  } 
  else {
      res.status(404).json({ error: "Student not found" });
  }
}
  }
  export default studentController;