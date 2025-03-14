import { User } from '../../users/entities/user.entity';
import { Material } from '../../materials/entities/material.entity';
export declare class Playlist {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    materials: Material[];
}
