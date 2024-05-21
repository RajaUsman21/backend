import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
const TeacherModel= sequelize.define(
    "Teacher",
    {
        // Model attributes are defined here
        firstName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastName: {
          type: DataTypes.STRING,
          // allowNull defaults to true
        },
        phone:{
          type: DataTypes.STRING
        }
      },
      {
        // Other model options go here
      },
    );
    export default TeacherModel;
    


