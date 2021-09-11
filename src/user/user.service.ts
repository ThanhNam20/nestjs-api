import { AuthService } from './../auth/auth.service';
/*
https://docs.nestjs.com/providers#services
*/
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { InjectModel } from '@nestjs/mongoose';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private readonly authService: AuthService,
  ) { }

  async register(registerDto: RegisterDto): Promise<User> {
    const user = new this.userModel(registerDto);
    await this.checkUniqueEmail(user.email);
    await user.save();
    return this.infoUser(user);
  }

  async login(loginDto: LoginDto): Promise<User> {
    const user = await this.findUserByEmail(loginDto.email);
    await this.validatePassword(loginDto.password, user.password);
    return this.infoUser(user)
  }

  private async findUserByEmail(email: string): Promise<any> {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new NotFoundException('Wrong email or password');
    }
    return user;
  }

  private async validatePassword(attemptPass: string, userPassword: string): Promise<any> {
    const match = await bcrypt.compare(attemptPass, userPassword);
    if (!match) {
      throw new NotFoundException('Wrong email or password');
    }
    return match;
  }

  private async checkUniqueEmail(email: string) {
    const user = await this.userModel.findOne({ email });
    if (user) {
      throw new BadRequestException('Email most be unique.');
    }
  }

  private infoUser(user: User): any {
    return {
      code: 1000,
      status: 400,
      message: 'done',
      body: {
        data: {
          email: user.email,
          fullName: user.fullName,
          access_token: this.authService.createAccessToken(user.email)
        }
      },
    }
  }

}
