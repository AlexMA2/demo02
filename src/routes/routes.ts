import { Router } from "https://deno.land/x/oak/mod.ts";
import { getAllProducts } from "../handlers/getAllProducts.ts";
import { getProduct } from "../handlers/getProduct.ts";
import { getGanancias } from "../handlers/getGanancias.ts";
import { getLocales } from "../handlers/getLocales.ts";
import { getProveedores} from "../handlers/getProveedores.ts";

const router = new Router();

router
  .get("/productos", getAllProducts)
  .get("/productos/:id", getProduct)
  .get("/ganancias", getGanancias)
  .get("/locales", getLocales)
  .get("/proveedores", getProveedores)

export default router;
