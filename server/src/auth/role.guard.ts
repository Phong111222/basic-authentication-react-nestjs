import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

function RoleGuard(roles: string[]) {
  class RoleGuard implements CanActivate {
    constructor(roles: string[]) {}

    canActivate(
      context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
      return;
    }
  }

  return new RoleGuard(roles);
}
