import { search } from "../repository/product.ts";
import * as doesProductExists from "../libs/doesProductExists.ts";

export async function getProduct({
  params,
  response,
}: {
  params: any;
  response: any;
}) {
  try {
    console.log(params);
    const productExists = await doesProductExists.findById(params.id);

    if (productExists) {
      const result = await search(params);
      response.status = 200;
      response.body = result.rows;
    } else {
      response.status = 404;
      response.body = { message: "Product not found" };
    }
  } catch (error) {
    console.log(error);
  }
}
