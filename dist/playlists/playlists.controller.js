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
exports.PlaylistsController = void 0;
const common_1 = require("@nestjs/common");
const playlists_service_1 = require("./playlists.service");
const create_playlist_dto_1 = require("./dto/create-playlist.dto");
const add_material_dto_1 = require("./dto/add-material.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let PlaylistsController = class PlaylistsController {
    constructor(playlistsService) {
        this.playlistsService = playlistsService;
    }
    create(createPlaylistDto, req) {
        return this.playlistsService.create(createPlaylistDto, req.user);
    }
    findAll(req) {
        return this.playlistsService.findAllByUser(req.user.id);
    }
    findOne(id) {
        return this.playlistsService.findOne(id);
    }
    addMaterial(id, addMaterialDto) {
        return this.playlistsService.addMaterial(id, addMaterialDto);
    }
    remove(id) {
        return this.playlistsService.remove(id);
    }
};
exports.PlaylistsController = PlaylistsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_playlist_dto_1.CreatePlaylistDto, Object]),
    __metadata("design:returntype", void 0)
], PlaylistsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PlaylistsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlaylistsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id/materials'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, add_material_dto_1.AddMaterialDto]),
    __metadata("design:returntype", void 0)
], PlaylistsController.prototype, "addMaterial", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlaylistsController.prototype, "remove", null);
exports.PlaylistsController = PlaylistsController = __decorate([
    (0, common_1.Controller)('playlists'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [playlists_service_1.PlaylistsService])
], PlaylistsController);
//# sourceMappingURL=playlists.controller.js.map