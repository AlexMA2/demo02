import { Router } from "https://deno.land/x/oak/mod.ts";
import { getAllUsers } from "../handlers/getAllUsers.ts";
import { getUser } from "../handlers/getUser.ts";

const router = new Router();

router
  .get("/productos", getAllUsers)
  .get("/productos/:id", getUser)

export default router;
