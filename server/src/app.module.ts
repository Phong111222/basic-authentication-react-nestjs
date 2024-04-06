import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthMiddleware } from './auth/auth.middleware';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    JwtModule.register({
      global: true,
      secret: '123',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).exclude('/auth/*').forRoutes('/users/*');
  }
}
