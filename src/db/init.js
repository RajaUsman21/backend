import ClassModel from "../model/class/index.js"
import MarksModel from "../model/marks/index.js"
import SalesModel from "../model/sales/index.js"
import ProductModel from "../model/product/products.js"
import SaleProductModel from "../model/sales/salesProducts.js"
import StudentModel from "../model/student/index.js"
import TeacherModel from "../model/teacher/index.js"
import CategoryModel from "../model/product/category.js"
import sequelize from "./config.js"
import userModel from "../model/user/index.js"


const syncDB= async()=>{
    await sequelize.sync({alter:true,force:false}),
    await StudentModel.sync({alter:true,force:false}),
    await TeacherModel.sync({alter:true,force:false}),
    await MarksModel.sync({alter:true,force:false}),
    await ClassModel.sync({alter:true,force:false}),
    await CategoryModel.sync({alter:true,force:false})
    await ProductModel.sync({alter:true, force:false}),
    await SalesModel.sync({alter:true,force:false}),
    await SaleProductModel.sync({alter:true, force:false}),
    await userModel.sync({alter:true,force:false})
   
}
export default syncDB