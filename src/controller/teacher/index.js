import TeacherModel from "../../model/teacher/index.js"

const teacherController={
    getAllTeachers:async (req, res) => {
      try {
        const teachers = await TeacherModel.findAll({
          order: [["createdAt", "DESC"]],
          limit: 5,
        });
        res.json({
          data: teachers,
        });
      } catch (error) {
        console.error("Error fetching teacher:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    },
  
    getSingleTeacher:async (req, res) => {
      try {
        const { id } = req.params;
        const teacher = await TeacherModel.findByPk(id);
  
        if (teacher) {
          res.json({ message: "Teacher found", teacher });
        } else {
          res.status(404).json({ error: "teacher not found" });
        }
      } catch (error) {
        console.error("Error getting single teacher:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    },
    
    postTeacher: async (req, res) => {
      try {
          const newTeacher = req.body;
          const teacher= await TeacherModel.create({
            firstName: newTeacher.firstName,
            lastName: newTeacher.lastName,
            phone: newTeacher.phone,
          });
          res.status(200).json({message:"Teacher created",teacher})
      } catch (error) {
          res.status(500).json({ error: "Failed to add teacher",});
      }
  
  },
  putTeacher: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedTeacher = req.body;

      const existingTeacher = await TeacherModel.findByPk(id);
      await existingTeacher.update({
        firstName: updatedTeacher.firstName,
        lastName: updatedTeacher.lastName,
        phone: updatedTeacher.phone,
      });

      res.status(200).json({ message: "teacher updated", teacher: existingTeacher});
    } catch (error) {
      console.error("Error updating teacher:", error);
      res.status(500).json({ error: "Failed to update teacher" });
    }
  },

    deleteTeacher:async (req, res) => {
      try {
        const { id } = req.params;
  
        const Teacher = await TeacherModel.findByPk(id);
      
  
        await Teacher.destroy();
  
        res.status(200).json({ message: "teacher deleted",Teacher});
      } catch (error) {
        console.error("Error deleting teacher:", error);
        res.status(500).json({ error: "Failed to delete teacher" });
      }
    }
  };
export default teacherController;
