import { UtilsService } from './../services/utils.service';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Query } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { Post } from './interfaces/post.interface';
import { PaginatedPostResultDto } from './dto/pagination-product.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectModel('Post') private readonly postModel: Model<Post>,
    private readonly authService: AuthService,
    private readonly utilsService: UtilsService,
  ) { }

  async getAllPost(query: PaginatedPostResultDto) {
    const posts = await this.postModel.find().limit(query.perPage).skip((query.page - 1) * query.perPage);
    return this.utilsService.returnModelApi(posts);
  }
}
