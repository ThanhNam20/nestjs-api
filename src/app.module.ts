import { PostModule } from './posts/post.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PostModule,
    AuthModule,
    UserModule,
    MongooseModule.forRoot(process.env.MONGO_URI)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
