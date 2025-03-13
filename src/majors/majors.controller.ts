import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { MajorsService } from './majors.service';
import { CreateMajorDto } from './dtos/create-major.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdminGuard } from '../auth/guards/admin.guard';

@Controller()
export class MajorsController {
  constructor(private readonly majorsService: MajorsService) {}

  @Post('majors')
  @UseGuards(JwtAuthGuard, AdminGuard)
  async create(@Body() createMajorDto: CreateMajorDto) {
    return this.majorsService.create(createMajorDto);
  }

  @Get('majors')
  async findAll() {
    return this.majorsService.findAll();
  }

  @Get('majors/:id')
  async findOne(@Param('id') id: string) {
    return this.majorsService.findOne(id);
  }

  @Get(':majorTitle/courses')
  async findCoursesByMajorTitle(@Param('majorTitle') majorTitle: string) {
    return this.majorsService.findCoursesByMajorTitle(majorTitle);
  }
} 