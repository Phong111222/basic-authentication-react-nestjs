import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthMiddleware } from 'src/auth/auth.middleware';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
