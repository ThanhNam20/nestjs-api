import { JwtAuthGuard } from './../auth/guards/jwt.guard';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

import { UserService } from './user.service';
import { Controller, Get, Post, Body, UseGuards, Req, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() registerDto: RegisterDto) {
    return await this.userService.register(registerDto);
  }

  @Post('login')
  @HttpCode(HttpStatus.CREATED)
  async login(@Body() loginDto: LoginDto) {
    return await this.userService.login(loginDto);
  }

  // @UseGuards(JwtAuthGuard)
  @Get('data')
  @HttpCode(HttpStatus.CREATED)
  getAll() {
    return {
      code: 1000,
      status: 400,
      message: 'done',
      body: {
        data: 'hahahah',
      },
    }
  }
}
