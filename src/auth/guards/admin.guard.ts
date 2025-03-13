import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user; // From JWT
    // add ahmadalnujaidi02@gmail.com and test@test.com
    // admin emails: fetch from .env

    const configService = new ConfigService();

    // list of admins assigned to variables.
    const ADMIN_EMAIL_1 = configService.get<string>('ADMIN_EMAIL_1');
    const ADMIN_EMAIL_2 = configService.get<string>('ADMIN_EMAIL_2');

    // check if the variable is an admin
    return user && (user.email === ADMIN_EMAIL_1  || user.email === ADMIN_EMAIL_2);
  }
} 