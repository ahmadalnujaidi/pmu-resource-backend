import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dtos/register.dto';
import { User } from '../users/entities/user.entity';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(registerDto: RegisterDto): Promise<User>;
    validateUser(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
