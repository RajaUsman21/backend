const WrongAPIController={
    wrongAPI: (req,res)=>{
        res.json({error:"You called wrong api"})
    }
}
export default WrongAPIController