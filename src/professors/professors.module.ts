import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessorsService } from './professors.service';
import { ProfessorsController } from './professors.controller';
import { Professor } from './entities/professor.entity';
import { Course } from '../courses/entities/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Professor, Course])],
  providers: [ProfessorsService],
  controllers: [ProfessorsController],
  exports: [ProfessorsService],
})
export class ProfessorsModule {} 