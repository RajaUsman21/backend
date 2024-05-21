import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const MarksModel= sequelize.define(
    'Marks',
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
      marks:{
        type: DataTypes.STRING
      }
    },
    {
      // Other model options go here
    },
)
export default MarksModel