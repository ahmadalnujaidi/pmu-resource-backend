import { AuthService } from './auth.service';
import { RegisterDto } from './dtos/register.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<{
        id: string;
        email: string;
        fullName: string;
        createdAt: Date;
        updatedAt: Date;
        playlists: import("../playlists/entities/playlist.entity").Playlist[];
    }>;
    login(req: any): Promise<{
        access_token: string;
    }>;
}
