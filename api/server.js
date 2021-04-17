import express from "express";
import "babel-polyfill";
import cors from "cors";
import env from "./env";
import blogPostsRoute from "./app/routes/blogPostsRoute";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/v1/", blogPostsRoute);

app.listen(env.port).on("listening", () => {
  console.log(`listening on ${env.port}`);
});

export default app;
