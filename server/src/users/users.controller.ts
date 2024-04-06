import { Controller, Get, Req, Session } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/me')
  getMyInformation(@Req() req: any) {
    return req?.currentUser;
  }
}
