import pool from "./pool";

pool.on("connect", () => {
  console.log("connected to the db");
});

const createBlogPostsTable = () => {
  const blogPostsCreateQuery =
    "CREATE TABLE IF NOT EXISTS blogposts (" +
    "id SERIAL PRIMARY KEY, " +
    "created_on TIMESTAMP NOT NULL, " +
    "title VARCHAR NOT NULL, " +
    "content VARCHAR NOT NULL)";

  pool
    .query(blogPostsCreateQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

const migrateDatabase = () => {
  createBlogPostsTable();
};

pool.on("remove", () => {
  console.log("disconnected from the db");
  process.exit(0);
});

export { migrateDatabase };

require("make-runnable");
