import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Professor } from './entities/professor.entity';
import { CreateProfessorDto } from './dtos/create-professor.dto';
import { Course } from '../courses/entities/course.entity';
import { UpdateProfessorDto } from './dtos/update-professor.dto';

@Injectable()
export class ProfessorsService {
  constructor(
    @InjectRepository(Professor)
    private professorsRepository: Repository<Professor>,
    @InjectRepository(Course)
    private coursesRepository: Repository<Course>,
  ) {}

  async create(createProfessorDto: CreateProfessorDto): Promise<Professor> {
    const { professorName, courseIds } = createProfessorDto;
    
    const professor = this.professorsRepository.create({
      professorName,
    });
    
    if (courseIds && courseIds.length > 0) {
      const courses = await this.coursesRepository.findByIds(courseIds);
      professor.courses = courses;
    }
    
    return this.professorsRepository.save(professor);
  }

  async findAll(): Promise<Professor[]> {
    return this.professorsRepository.find({ 
      relations: ['courses'] 
    });
  }

  async findOne(id: string): Promise<Professor> {
    const professor = await this.professorsRepository.findOne({ 
      where: { id },
      relations: ['courses'] 
    });
    
    if (!professor) {
      throw new NotFoundException(`Professor with ID ${id} not found`);
    }
    
    return professor;
  }

  async findByName(professorName: string): Promise<Professor> {
    const professor = await this.professorsRepository.findOne({ 
      where: { professorName },
      relations: ['courses'] 
    });
    
    if (!professor) {
      throw new NotFoundException(`Professor with name ${professorName} not found`);
    }
    
    return professor;
  }
  // update professor and add courses to it
  async update(id: string, updateProfessorDto: UpdateProfessorDto): Promise<Professor> {
    const { courseIds } = updateProfessorDto;
    const professor = await this.findOne(id);
    professor.courses = await this.coursesRepository.findByIds(courseIds);
    return this.professorsRepository.save(professor);
  }
} 