import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  Session,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequestDto } from './dtos/login.dto';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwtService: JwtService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('/login')
  async login(
    @Body() body: LoginRequestDto,
    @Req() request: any,
    @Res({ passthrough: true }) response: any,
  ) {
    const token = await this.authService.login(body);

    response.cookie('token', token, {
      maxAge: 900000,
      httpOnly: true,
      secure: true,
    });

    return { success: true };
  }

  @Post('/logout')
  logout(@Res({ passthrough: true }) res: any) {
    res.cookie('token', '');

    return { success: true };
  }
}
