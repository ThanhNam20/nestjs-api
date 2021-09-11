import { UtilsService } from './../services/utils.service';
import { PostSchema } from './schemas/post.schema';
import { PostController } from './post.controller';
import { PostService } from './post.service';
/*
https://docs.nestjs.com/modules
*/

import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }]),
    forwardRef(() => AuthModule),
  ],
  controllers: [
    PostController,],
  providers: [
    PostService,
    UtilsService,
  ],
})
export class PostModule { }
