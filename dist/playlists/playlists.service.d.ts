import { Repository } from 'typeorm';
import { Playlist } from './entities/playlist.entity';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { AddMaterialDto } from './dto/add-material.dto';
import { User } from '../users/entities/user.entity';
import { Material } from '../materials/entities/material.entity';
export declare class PlaylistsService {
    private playlistsRepository;
    private materialsRepository;
    constructor(playlistsRepository: Repository<Playlist>, materialsRepository: Repository<Material>);
    create(createPlaylistDto: CreatePlaylistDto, user: User): Promise<Playlist>;
    findAllByUser(userId: string): Promise<Playlist[]>;
    findOne(id: string): Promise<Playlist>;
    addMaterial(playlistId: string, addMaterialDto: AddMaterialDto): Promise<Playlist>;
    remove(id: string): Promise<void>;
}
