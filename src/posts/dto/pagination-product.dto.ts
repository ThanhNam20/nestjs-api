import { Post } from './../interfaces/post.interface';
export class PaginatedPostResultDto {
  // data: Post[];
  page: number;
  perPage: number;
  // totalCount: number;
}