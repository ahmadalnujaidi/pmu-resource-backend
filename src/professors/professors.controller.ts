import { Controller, Post, Body, Get, Param, UseGuards, Put } from '@nestjs/common';
import { ProfessorsService } from './professors.service';
import { CreateProfessorDto } from './dtos/create-professor.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdminGuard } from '../auth/guards/admin.guard';
import { UpdateProfessorDto } from './dtos/update-professor.dto';

@Controller('professors')
export class ProfessorsController {
  constructor(private readonly professorsService: ProfessorsService) {}

  @Post()
  @UseGuards(JwtAuthGuard, AdminGuard)
  async create(@Body() createProfessorDto: CreateProfessorDto) {
    return this.professorsService.create(createProfessorDto);
  }

  @Get()
  async findAll() {
    return this.professorsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.professorsService.findOne(id);
  }

  // update professor and add courses to it
  @Put(':id')
  @UseGuards(JwtAuthGuard, AdminGuard)
  async update(@Param('id') id: string, @Body() updateProfessorDto: UpdateProfessorDto) {
    return this.professorsService.update(id, updateProfessorDto);
  }
} 