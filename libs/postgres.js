import pg from "pg";
import config from "../config/config.js";

const getConnection = async () => {
  const client = new pg.Client({
    host: config.dbHost,
    port: config.dbPort,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbName,
  });
  await client.connect();
  return client;
};

export {getConnection}
