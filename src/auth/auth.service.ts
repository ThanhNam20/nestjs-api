import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
  ) {}
  createAccessToken(email: string) {
    const accessToken = this.jwtService.sign({email});
    return accessToken;
  }
 }
