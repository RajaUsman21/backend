import MarksModel from "../../model/marks/index.js"

  const MarksController={
    getAllMarks: async (req, res) => {
        try {
          const marks = await MarksModel.findAll({
            // where: {
            //   firstName: "usman",
            // },
            order: [["createdAt", "DESC"]],
            limit: 5,
          });
          res.json({
            data: marks,
          });
        } catch (error) {
          console.error("Error fetching Marks:", error);
          res.status(500).json({ error: "Internal server error" });
        }
      },
    postMarks: async (req, res) => {
        try {
            const newMarks = req.body;
            const marks= await MarksModel.create({
              firstName:newMarks.firstName,
              lastName:newMarks.lastName,
              marks:newMarks.marks
            });
            res.status(200).json({message:"Marks Added",marks})
        } catch (error) {
            res.status(500).json({ error: "Failed to add Marks",});
        }
    
    },



        putMarks: async (req,res)=>{
            try{
                const {id}=req.params
                const UpdatedMarks = req.body
                const marks = await MarksModel.findByPk(id)
                await marks.update({
                    firstName: UpdatedMarks.firstName,
                    lastName: UpdatedMarks.lastName,
                    marks: UpdatedMarks.marks
                })
                res.status(200).json({ message: "Marks updated", UpdatedMarks: marks });
    } catch (error) {
      console.error("Error updating student:", error);
      res.status(500).json({ error: "Failed to update Marks" });
    }
  },
  deleteMarks: async (req, res) => {
    try {
      const { id } = req.params;

      const marks = await MarksModel.findByPk(id);
      await marks.destroy();

      res.status(200).json({ message: "Marks deleted",marks});
    } catch (error) {
      console.error("Error deleting student:", error);
      res.status(500).json({ error: "Failed to delete Marks" });
    }
  }
};
    export default MarksController
    
  
    
   
  