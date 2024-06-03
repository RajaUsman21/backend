import { Router } from "express";
import ProductsController from "../../controller/products/index.js";
import AuthenticateMiddleware from "../../middleware/auth.js";

const ProductRouter = Router();
ProductRouter.get("/products",AuthenticateMiddleware, ProductsController.getAll);

ProductRouter.get("/product/:id",AuthenticateMiddleware, ProductsController.getSingle);

ProductRouter.post("/product",AuthenticateMiddleware, ProductsController.create);

ProductRouter.put("/product/:id", ProductsController.update);

ProductRouter.delete("/product/:id", ProductsController.delete);

export default ProductRouter;
 