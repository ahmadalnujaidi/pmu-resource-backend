import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Playlist } from './entities/playlist.entity';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { AddMaterialDto } from './dto/add-material.dto';
import { User } from '../users/entities/user.entity';
import { Material } from '../materials/entities/material.entity';

@Injectable()
export class PlaylistsService {
  constructor(
    @InjectRepository(Playlist)
    private playlistsRepository: Repository<Playlist>,
    
    @InjectRepository(Material)
    private materialsRepository: Repository<Material>,
  ) {}

  async create(createPlaylistDto: CreatePlaylistDto, user: User): Promise<Playlist> {
    const playlist = this.playlistsRepository.create({
      ...createPlaylistDto,
      user,
    });

    return this.playlistsRepository.save(playlist);
  }

  async findAllByUser(userId: string): Promise<Playlist[]> {
    return this.playlistsRepository.find({
      where: { user: { id: userId } },
      relations: ['materials'],
    });
  }

  async findOne(id: string): Promise<Playlist> {
    const playlist = await this.playlistsRepository.findOne({
      where: { id },
      relations: ['materials', 'user'],
    });

    if (!playlist) {
      throw new NotFoundException(`Playlist with ID "${id}" not found`);
    }

    return playlist;
  }

  async addMaterial(playlistId: string, addMaterialDto: AddMaterialDto): Promise<Playlist> {
    const playlist = await this.findOne(playlistId);
    
    // Find the existing material
    const material = await this.materialsRepository.findOne({
      where: { id: addMaterialDto.materialId }
    });
    
    if (!material) {
      throw new NotFoundException(`Material with ID "${addMaterialDto.materialId}" not found`);
    }
    
    // Add the material to the playlist
    if (!playlist.materials) {
      playlist.materials = [];
    }
    
    // Check if material is already in the playlist
    const materialExists = playlist.materials.some(m => m.id === material.id);
    if (!materialExists) {
      playlist.materials.push(material);
    }
    
    return this.playlistsRepository.save(playlist);
  }

  async remove(id: string): Promise<void> {
    const playlist = await this.findOne(id);
    await this.playlistsRepository.remove(playlist);
  }
}
