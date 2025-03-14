import { Playlist } from '../../playlists/entities/playlist.entity';
export declare class User {
    id: string;
    email: string;
    fullName: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    playlists: Playlist[];
}
