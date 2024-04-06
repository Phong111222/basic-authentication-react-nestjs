import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

import { User, UsersService } from 'src/users/users.service';

declare global {
  namespace Express {
    interface Request {
      currentUser?: User;
    }
  }
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}
  async use(req: Request, res: any, next: (error?: any) => void) {
    const token = req.cookies.token;

    if (!token) {
      throw new UnauthorizedException();
    }

    const user = this.jwtService.verify<User>(token);

    if (!user) {
      throw new UnauthorizedException();
    }

    req.currentUser = user;

    next();
  }
}
