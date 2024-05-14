const students=[
    {name:"usman", id:"1",city:"kharian"},
    {name:"Ali", id:"2",city:"lahore"},
    {name:"waqas", id:"3",city:"gujrat"},
    {name:"hamza", id:"4",city:"bhimber"},
    {name:"danyal", id:"51",city:"islamabad"},
    {name:"usman", id:"15",city:"kharian"}
  ]
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
    postStudent: (req,res)=>{
        const newStudent=req.body;
        students.push(newStudent)
        res.json(newStudent)
    
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