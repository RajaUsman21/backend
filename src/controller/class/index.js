import ClassModel from "../../model/class/index.js";

const classController={
    getClass:(req,res)=>{
        return res.json({message:"This is Class1"})
    },
    postClass: async (req, res) => {
        try {
            const newClass = req.body;
            const Class= await ClassModel.create({
              firstName:newClass.firstName,
              lastName:newClass.lastName,
              class:newClass.class
            });
            res.status(200).json({message:"class Added"})
        } catch (error) {
            res.status(500).json({ error: "Failed to add Class",});
        }
    
    },
}

export default classController