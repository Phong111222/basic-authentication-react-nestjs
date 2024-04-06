import { Body, Injectable, NotFoundException, Res } from '@nestjs/common';
import { User, UsersService } from 'src/users/users.service';
import { LoginRequestDto } from './dtos/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(body: LoginRequestDto) {
    const user = await this.userService.find({
      userName: body.userName,
      password: body.password,
    });

    if (!user) {
      throw new NotFoundException({ message: 'User Not Found' });
    }

    return this.createToken({
      userName: user.userName,
      id: user.id,
    });
  }

  async createToken(data: Omit<User, 'password'>) {
    return this.jwtService.signAsync(data);
  }
}
