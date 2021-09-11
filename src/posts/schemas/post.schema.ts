import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  id: {type: Number},
  title: {type: String},
  author: { type: String},
  post_seen: { type: Number},
  post_content: { type: String},
  image: { type: String},
  post_like: { type: Number},
})
