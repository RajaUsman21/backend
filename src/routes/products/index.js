import { Router } from "express";
import ProductsController from "../../controller/products/index.js";

const ProductRouter = Router();
ProductRouter.get("/products", ProductsController.getAll);

ProductRouter.get("/product/:id", ProductsController.getSingle);

ProductRouter.post("/product", ProductsController.create);

ProductRouter.put("/product/:id", ProductsController.update);

ProductRouter.delete("/product/:id", ProductsController.delete);

export default ProductRouter;
