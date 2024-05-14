const teachers=[
    {name:"Sir Ali", id:"0",city:"lahore"},
    {name:"Sir Mohsin", id:"1",city:"lahore"},
    {name:"Sir Ahsan", id:"2",city:"Gujrat"},
    {name:"Sir Ejaz", id:"3",city:"kotla"},
    {name:"Sir Adeel", id:"4",city:"sialkot"},
    {name:"Sir Mujtaba", id:"5",city:"Qasoor"}
  ]
const teacherController={
    getAllTeachers:(req,res)=>{
        res.json(teachers)
        
      },
    getSingleTeacher:(req,res)=>{
        const id=req.params.id
        const teacher=teachers.find(teacher=>teacher.id===id)
        if(teacher){
          res.json(teacher)
        }else{
          res.json({message:"teacher not found"})
        }
        },
    
    postTeacher: (req, res) => {
      try {
          const newTeacher = req.body;
          console.log('====================================');
          console.log(req.body);
          console.log('====================================');
          teachers.push(newTeacher);
          res.json({newTeacher,teachers});
      } catch (error) {
          res.status(500).json({ error: "Failed to add teacher",});
      }
  
  },
  putTeacher: (req, res) => {
    try {
        const id = req.params.id;
        const updatedTeacher = req.body;
        
        // Update the teacher in the array
        teachers[id] = updatedTeacher;
        
        // Respond with the updated teacher
        res.json({updatedTeacher,teachers});
    } catch (error) {
        res.status(500).json({ error: "Failed to update teacher" });
    }
},
    
    deleteTeacher:(req, res) => {
      try {
          const id = req.params.id;
          
          // Find the index of the teacher with the given ID in the array
          const index = teachers.findIndex(teacher => teacher.id === id);
          
          if (index !== -1) {
              // If teacher with given ID exists, remove them from the array using splice
              teachers.splice(index, 1);
              res.json({ message: "Teacher deleted successfully",teachers });
          } else {
              // If teacher with given ID does not exist, throw an error
              throw new Error("Teacher not found");
          }
      } catch (error) {
          // If an error occurs, handle it and respond with an error message
          res.status(404).json({ error: error.message });
      }
  }




}
export default teacherController;
