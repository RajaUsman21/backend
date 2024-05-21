import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const ProductModel = sequelize.define(
  "Product",
  {
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productStock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productPrice: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {}
);


export default ProductModel;