import StudentModel from "../../model/student/index.js";

const studentController = {
  getAllStudent: async (req, res) => {
    try {
      const students = await StudentModel.findAll({
        // where: {
        //   firstName: "usman",
        // },
        order: [["createdAt", "DESC"]],
        limit: 5,
      });
      res.json({
        data: students,
      });
    } catch (error) {
      console.error("Error fetching students:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getSingleStudent: async (req, res) => {
    try {
      const { id } = req.params;
      const student = await StudentModel.findByPk(id);

      if (student) {
        res.json({ message: "Student found", student });
      } else {
        res.status(404).json({ error: "Student not found" });
      }
    } catch (error) {
      console.error("Error getting single student:", error);
      res.status(500).json({ message: "Internal server error" });
    }
     //   try{
    //     const {id} = req.params
    //     const student= await StudentModel.findOne(
    //       {where:{
    //         id
    //       }}
    //     )
    //     res.status(200).json({message:"this is the student ",student})
    // } catch (error) {
    //   // console.log(error)
    //     res.status(500).json({ error: "Internal Server Error",});

    // }
  },
  postStudent: async (req, res) => {
    try {
      const newStudent = req.body;
      const student = await StudentModel.create({
        firstName: newStudent.firstName,
        lastName: newStudent.lastName,
        phone: newStudent.phone,
      });
      res.status(200).json({ message: "Student created",student});
    } catch (error) {
      console.error("Error creating student:", error);
      res.status(500).json({ error: "Failed to add student" });
    }
  },

  putStudent: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedStudentData = req.body;

      const existingStudent = await StudentModel.findByPk(id);
      if (!existingStudent) {
        return res.status(404).json({ error: "Student not found" });
      }

      await existingStudent.update({
        firstName: updatedStudentData.firstName,
        lastName: updatedStudentData.lastName,
        phone: updatedStudentData.phone,
      });

      res.status(200).json({ message: "Student updated", student: existingStudent });
    } catch (error) {
      console.error("Error updating student:", error);
      res.status(500).json({ error: "Failed to update student" });
    }
  },

  deleteStudent: async (req, res) => {
    try {
      const { id } = req.params;

      const existingStudent = await StudentModel.findByPk(id);
      if (!existingStudent) {
        return res.status(404).json({ error: "Student not found" });
      }

      await existingStudent.destroy();

      res.status(200).json({ message: "Student deleted"});
    } catch (error) {
      console.error("Error deleting student:", error);
      res.status(500).json({ error: "Failed to delete student" });
    }
  }
};

export default studentController;

   
  

   
  //  putUpdateStudent: (req, res) => {
  //   students[0]=req.body
  //       console.log(students);
  //       res.json({students})
  //  } ,
// deleteStudent: (req, res) => {
//   const id = req.params.id;
//   const index = students.findIndex(student => student.id === id);
//   if (index !== -1) {
//       students.splice(index, 1);
//       res.json({ message: "Student deleted successfully" ,students});
//   } 
//   else {
//       res.status(404).json({ error: "Student not found" });
//   }
// }
  
