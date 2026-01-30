import mongoose, { Schema, models, model } from "mongoose";

const BlogSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    authorName: { type: String, required: true },
    blogCategory: { type: String, required: true },
    views: { type: Number, default: 0 },
    thumbnailUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


export default models.Blog || model("Blog", BlogSchema);
