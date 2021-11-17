import { search } from "../repository/proveedores.ts";

export async function getProveedores({ response }: { response: any }) {
  const result = await search();
  response.body = result.rows;
}
