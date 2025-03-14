import { Controller, Get, Post, Body, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { PlaylistsService } from './playlists.service';
import { CreatePlaylistDto, AddMaterialToPlaylistDto } from './dtos/create-playlist.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('playlists')
@UseGuards(JwtAuthGuard)
export class PlaylistsController {
  constructor(private readonly playlistsService: PlaylistsService) {}

  @Post()
  create(@Body() createPlaylistDto: CreatePlaylistDto, @Request() req) {
    return this.playlistsService.create(createPlaylistDto, req.user);
  }

  @Get()
  findAll(@Request() req) {
    return this.playlistsService.findAllByUser(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    return this.playlistsService.findOne(+id, req.user.id);
  }

  @Post(':id/materials')
  addMaterial(
    @Param('id') id: string,
    @Body() addMaterialDto: AddMaterialToPlaylistDto,
    @Request() req,
  ) {
    return this.playlistsService.addMaterial(+id, req.user.id, addMaterialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.playlistsService.delete(+id, req.user.id);
  }
}
