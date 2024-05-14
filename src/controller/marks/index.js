const marks=[
    {name:"usman", english:"71", grade:"B"},
    {name:"usman",urdu:"35", grade:"F"},
    {name:"usman",math:"76", grade:"B+"},
    {name:"usman",chemistry:"50", grade:"D"},
    {name:"usman",computer:"95", grade:"A+"},
    {name:"usman",physics:"60", grade:"C+"}
  ]
  const MarksController={
    getMarks:(req,res)=>{
        res.json({marks})
    },
    postMarks:(req,res)=>{
        const AddNewMarks=req.body
        marks.push(AddNewMarks)
        res.json({AddNewMarks,marks})
    },
    putMarks:(req,res)=>{
        const id=req.params.id
        const updateMarks=req.body
        marks [id]=updateMarks;
        res.json({updateMarks,marks})

    },
    deleteMarks:(req,res)=>{
        try {
            const id= req.params.id;
            const index = marks.findIndex(ele => ele.id === id);
            
            if (index !== -1) {
                marks.splice(index, 1);
                res.json({ message: "Marks deleted successfully",marks });
            } else {
                throw new Error("student marks not found");
            }
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
  
    }
    export default MarksController
  