import client from "../db.ts";

const tableName = "productos";

interface Params {
  id?: any;
}

export async function search(params: Params = {}) {
  const isSpecific = Object.keys(params).length !== 0;
  if (!isSpecific) {
    
    return await client.execute(`SELECT * FROM ${tableName}`);
  } else {
    return await client.execute(`SELECT * FROM ${tableName} WHERE id = ?`, [params.id]);
  }
}
