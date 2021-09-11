import { PostService } from './post.service';
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { PaginatedPostResultDto } from './dto/pagination-product.dto';

@Controller('post')
export class PostController {
  constructor(
    private readonly postService: PostService,
  ) { }

  @Get('getAll')
  @HttpCode(HttpStatus.CREATED)
  async getPost(@Query() param) {
    const query = {
      page: parseInt(param.page),
      perPage: parseInt(param.perPage),
    }
    return await this.postService.getAllPost(query);
  }

}
