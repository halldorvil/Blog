import dbQuery from "../db/dbQuery";
import { errorMessage, successMessage, status } from "../helpers/status";

const getAllBlogPosts = async (req, res) => {
  const getAllBlogPostsQuery = "SELECT * FROM blogposts ORDER BY id DESC";

  try {
    const { rows } = await dbQuery.query(getAllBlogPostsQuery);
    const dbResponse = rows;

    if (!dbResponse[0]) {
      errorMessage.error = "No blog posts found";
      return res.status(status.notFound).send(errorMessage);
    }

    successMessage.data = dbResponse;
    return res.status(status.success).send(successMessage);
  } catch (err) {
    errorMessage.error = "Unknown server error";
    return res.status(status.error).send(errorMessage);
  }
};

export { getAllBlogPosts };
