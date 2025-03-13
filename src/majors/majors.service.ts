import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Major } from './entities/major.entity';
import { CreateMajorDto } from './dtos/create-major.dto';

@Injectable()
export class MajorsService {
  constructor(
    @InjectRepository(Major)
    private majorsRepository: Repository<Major>,
  ) {}

  async create(createMajorDto: CreateMajorDto): Promise<Major> {
    const major = this.majorsRepository.create(createMajorDto);
    return this.majorsRepository.save(major);
  }

  async findAll(): Promise<Major[]> {
    return this.majorsRepository.find({ relations: ['courses'] });
  }

  async findOne(id: string): Promise<Major> {
    const major = await this.majorsRepository.findOne({ 
      where: { id },
      relations: ['courses'] 
    });
    
    if (!major) {
      throw new NotFoundException(`Major with ID ${id} not found`);
    }
    
    return major;
  }

  async findByTitle(title: string): Promise<Major> {
    const major = await this.majorsRepository.findOne({ 
      where: { title },
      relations: ['courses'] 
    });
    
    if (!major) {
      throw new NotFoundException(`Major with title ${title} not found`);
    }
    
    return major;
  }

  async findCoursesByMajorTitle(title: string) {
    const major = await this.findByTitle(title);
    return major.courses;
  }
} 