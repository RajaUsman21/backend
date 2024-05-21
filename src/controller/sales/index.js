import SaleProductModel from "../../model/sales/salesProducts.js";
import SalesModel from "../../model/sales/index.js";
import ProductModel from "../../model/sales/products.js";

const salesController= {
    getAll: async (req, res) => {
      try {
        const sales = await SalesModel.findAll({
          order: [["createdAt", "DESC"]],
          limit: 5,
        });
  
        res.json({
          data: sales,
        });
      } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
      }
    },
    getSingle: async (req, res) => {
      try {
        const { id } = req.params;
  
        const sale = await SalesModel.findByPk(id, {
          include: [{model: SaleProductModel,
            include:[ProductModel]}
          ],
        });
  
        if (!sale) {
          return res.status(404).json({ message: "No sale with this name" });
        }
        res.status(200).json({ data: sale });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error", error });
      }
    },
    create: async (req, res) => {
      try {
        const payload = req.body;
        sale.totalAmount = 1;
  
        await sale.save();
  
        const salesProduct = payload.salesProducts.map((ele) => {
          return {
            ...ele,
            SaleId: sale.id,
          };
        });
  
        await SaleProductModel.bulkCreate(salesProduct); 
  
        res.status(200).json({ message: "sale created", sale });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error",error });
      }
    },
        // const totalAmount = payload.salesproduct.reduce((total, product)=>
        // total+product.productQuantity*product.rate , 0)

        // const result = await sequelize
  
        // console.log(payload, "payload");
  
        // const sale = await  SaleProductModel.create(payload);



        //////////////////////////
    
    update: async (req, res) => {
        try {
          const { id } = req.params;
          const updatedSaleData = req.body;
    
          const existingSale = await SalesModel.findByPk(id);
          if (!existingSale) {
            return res.status(404).json({ error: "Sale not found" });
          }
    
          await existingSale.update(updatedSaleData);
    
          res.status(200).json({ message: "Sale updated", sale: existingSale });
        } catch (error) {
          console.error("Error updating sale:", error);
          res.status(500).json({ error: "Failed to update sale" });
        }
      },
      delete: async (req, res) => {
        try {
          const { id } = req.params;
    
          const existingSale = await SalesModel.findByPk(id);
          if (!existingSale) {
            return res.status(404).json({ error: "Sale not found" });
          }
    
          await existingSale.destroy();
    
          res.status(200).json({ message: "Sale deleted" });
        } catch (error) {
          console.error("Error deleting sale:", error);
          res.status(500).json({ error: "Failed to delete sale" });
        }
      }
    };
  
  export default salesController;
  