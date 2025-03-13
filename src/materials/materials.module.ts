import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialsService } from './materials.service';
import { MaterialsController } from './materials.controller';
import { Material } from './entities/material.entity';
import { Professor } from '../professors/entities/professor.entity';
import { Course } from '../courses/entities/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Material, Professor, Course])],
  providers: [MaterialsService],
  controllers: [MaterialsController],
  exports: [MaterialsService],
})
export class MaterialsModule {} 