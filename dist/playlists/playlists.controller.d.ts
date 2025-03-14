import { PlaylistsService } from './playlists.service';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { AddMaterialDto } from './dto/add-material.dto';
export declare class PlaylistsController {
    private readonly playlistsService;
    constructor(playlistsService: PlaylistsService);
    create(createPlaylistDto: CreatePlaylistDto, req: any): Promise<import("./entities/playlist.entity").Playlist>;
    findAll(req: any): Promise<import("./entities/playlist.entity").Playlist[]>;
    findOne(id: string): Promise<import("./entities/playlist.entity").Playlist>;
    addMaterial(id: string, addMaterialDto: AddMaterialDto): Promise<import("./entities/playlist.entity").Playlist>;
    remove(id: string): Promise<void>;
}
