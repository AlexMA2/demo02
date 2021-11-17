import { search } from "../repository/ganancias.ts";

export async function getGanancias({ response }: { response: any }) {
  const result = await search();
  response.body = result.rows;
}
