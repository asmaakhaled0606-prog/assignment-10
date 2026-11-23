import { Router } from "express";
import * as US from "./message.service.js"
import { authentication } from "../../common/middleware/authentication.js";
import { Validation } from "../../common/middleware/validation.js";
import * as MV from "./message.validation.js";
import { multerLocal } from "../../common/middleware/multer.js";
import { multer_enum } from "../../common/enum/multer.enum.js";

const messageRouter = Router();


messageRouter.post("/",
    multerLocal("messages", multer_enum.images).array("attachments", 3),
    Validation(MV.createMessageSchema),
    US.createMessage);



export default messageRouter;