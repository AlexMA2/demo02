import { Client } from "https://deno.land/x/mysql/mod.ts";

const client = await new Client().connect({
  hostname: "bom5oopkpzqyalaemclz-mysql.services.clever-cloud.com",  
  username: "uctswvk66zhqklvg",
  password: "sp3BgDV0BuCKoiSbxgmN",
  port: 3306,
  db: "bom5oopkpzqyalaemclz",  
});

export default client;
