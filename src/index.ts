import { Application } from "https://deno.land/x/oak/mod.ts";
import router from './routes/routes.ts'

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.use((ctx) => {
  ctx.response.body = "Bienvenido a La Guarida de Papel";
});

await app.listen({ port: env.PORT || 8000 });