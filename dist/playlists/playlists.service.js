"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaylistsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const playlist_entity_1 = require("./entities/playlist.entity");
const material_entity_1 = require("../materials/entities/material.entity");
let PlaylistsService = class PlaylistsService {
    constructor(playlistsRepository, materialsRepository) {
        this.playlistsRepository = playlistsRepository;
        this.materialsRepository = materialsRepository;
    }
    async create(createPlaylistDto, user) {
        const playlist = this.playlistsRepository.create(Object.assign(Object.assign({}, createPlaylistDto), { user }));
        return this.playlistsRepository.save(playlist);
    }
    async findAllByUser(userId) {
        return this.playlistsRepository.find({
            where: { user: { id: userId } },
            relations: ['materials'],
        });
    }
    async findOne(id) {
        const playlist = await this.playlistsRepository.findOne({
            where: { id },
            relations: ['materials', 'user'],
        });
        if (!playlist) {
            throw new common_1.NotFoundException(`Playlist with ID "${id}" not found`);
        }
        return playlist;
    }
    async addMaterial(playlistId, addMaterialDto) {
        const playlist = await this.findOne(playlistId);
        const material = this.materialsRepository.create({
            title: addMaterialDto.title,
            type: addMaterialDto.type,
            data: addMaterialDto.data,
        });
        const savedMaterial = await this.materialsRepository.save(material);
        if (!playlist.materials) {
            playlist.materials = [];
        }
        playlist.materials.push(savedMaterial);
        return this.playlistsRepository.save(playlist);
    }
    async remove(id) {
        const playlist = await this.findOne(id);
        await this.playlistsRepository.remove(playlist);
    }
};
exports.PlaylistsService = PlaylistsService;
exports.PlaylistsService = PlaylistsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(playlist_entity_1.Playlist)),
    __param(1, (0, typeorm_1.InjectRepository)(material_entity_1.Material)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PlaylistsService);
//# sourceMappingURL=playlists.service.js.map