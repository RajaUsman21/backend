import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";
import SalesModel from "./index.js";
import ProductModel from "../product/products.js";

const SaleProductModel = sequelize.define(
  "SaleProduct",
  {
    // productName: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    productQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rate: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {}
);
ProductModel.hasMany(SaleProductModel);
SaleProductModel.belongsTo(ProductModel);

SalesModel.hasMany(SaleProductModel);
SaleProductModel.belongsTo(SalesModel);

export default SaleProductModel;
