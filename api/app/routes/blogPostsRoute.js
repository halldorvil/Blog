import express from "express";
import { getAllBlogPosts } from "../controllers/blogPostsController";

const router = express.Router();

router.get("/blogposts", getAllBlogPosts);

export default router;