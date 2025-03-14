import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Playlist } from './entities/playlist.entity';
import { CreatePlaylistDto, AddMaterialToPlaylistDto } from './dtos/create-playlist.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class PlaylistsService {
  constructor(
    @InjectRepository(Playlist)
    private playlistRepository: Repository<Playlist>,
  ) {}

  async create(createPlaylistDto: CreatePlaylistDto, user: User): Promise<Playlist> {
    const playlist = this.playlistRepository.create({
      ...createPlaylistDto,
      user,
      materials: [],
    });
    return this.playlistRepository.save(playlist);
  }

  async findAllByUser(userId: number): Promise<Playlist[]> {
    return this.playlistRepository.find({
      where: { user: { id: userId.toString() } },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number, userId: number): Promise<Playlist> {
    const playlist = await this.playlistRepository.findOne({
      where: { id, user: { id: userId.toString() } },
    });
    if (!playlist) {
      throw new NotFoundException('Playlist not found');
    }
    return playlist;
  }

  async addMaterial(
    id: number,
    userId: number,
    addMaterialDto: AddMaterialToPlaylistDto,
  ): Promise<Playlist> {
    const playlist = await this.findOne(id, userId);
    playlist.materials.push({
      title: addMaterialDto.title,
      type: addMaterialDto.type,
      data: addMaterialDto.data,
    });
    return this.playlistRepository.save(playlist);
  }

  async delete(id: number, userId: number): Promise<void> {
    const playlist = await this.findOne(id, userId);
    await this.playlistRepository.remove(playlist);
  }
}
