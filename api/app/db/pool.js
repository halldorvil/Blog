import { Pool } from "pg";

const env = require("../../env");

const databaseConfig = { connectionString: env.database_url };
const pool = new Pool(databaseConfig);

export default pool;
