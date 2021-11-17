import { search } from "../repository/product.ts";

export async function getAllProducts({ response }: { response: any }) {
  const result = await search();
  response.body = result.rows;
}
