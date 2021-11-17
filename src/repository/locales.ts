import client from "../db.ts";

const tableName = "locales";

interface Params {
  id?: any;
}

export async function search(params: Params = {}) {    
    return await client.execute(`SELECT * FROM ${tableName}`);
}
