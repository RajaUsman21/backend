import StudentModel from "../model/student/index.js"


const syncDB= async()=>{
    // await sequelize.sync({alter:true,force:false})
    await StudentModel.sync({alter:true,force:false})
}
export default syncDB