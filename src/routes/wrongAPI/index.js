import { Router } from "express";
const WrongApiRouter=Router();
import WrongAPIController from "../../controller/wrongAPI/index.js";

WrongApiRouter.get("*",WrongAPIController.wrongAPI)
WrongApiRouter.post("*",WrongAPIController.wrongAPI)
WrongApiRouter.put("*",WrongAPIController.wrongAPI)
WrongApiRouter.delete("*",WrongAPIController.wrongAPI)
WrongApiRouter.patch("*",WrongAPIController.wrongAPI)
WrongApiRouter.options("*",WrongAPIController.wrongAPI)
WrongApiRouter.head("*",WrongAPIController.wrongAPI)

export default WrongApiRouter