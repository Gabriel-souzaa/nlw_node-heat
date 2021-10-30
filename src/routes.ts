import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLastThreeMessageControllers } from "./controllers/GetLastThreeMessageControllers";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthentiicated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);
router.post(
  "/messages",
  ensureAuthenticated,
  new CreateMessageController().handle
);
router.get("/lastThreeMessages", new GetLastThreeMessageControllers().hadle);
router.get("/profile", ensureAuthenticated, new ProfileUserController().hadle);

export { router };
