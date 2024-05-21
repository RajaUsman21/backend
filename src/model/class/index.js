import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const ClassModel= sequelize.define(
    'Class',
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
      class:{
        type: DataTypes.STRING
      }
    },
    {
      // Other model options go here
    },
)
export default ClassModel