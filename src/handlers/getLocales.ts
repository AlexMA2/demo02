import { search } from "../repository/locales.ts";

export async function getLocales({ response }: { response: any }) {
  const result = await search();
  response.body = result.rows;
}
