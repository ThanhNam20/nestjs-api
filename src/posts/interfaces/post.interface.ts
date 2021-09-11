import { Document } from 'mongoose';
export interface Post extends Document {
  id: number;
  title: string;
  author: string;
  post_seen: number;
  post_content: string;
  image: string;
  post_like: number;
}