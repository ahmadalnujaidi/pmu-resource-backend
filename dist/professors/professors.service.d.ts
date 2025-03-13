import { Repository } from 'typeorm';
import { Professor } from './entities/professor.entity';
import { CreateProfessorDto } from './dtos/create-professor.dto';
import { Course } from '../courses/entities/course.entity';
import { UpdateProfessorDto } from './dtos/update-professor.dto';
export declare class ProfessorsService {
    private professorsRepository;
    private coursesRepository;
    constructor(professorsRepository: Repository<Professor>, coursesRepository: Repository<Course>);
    create(createProfessorDto: CreateProfessorDto): Promise<Professor>;
    findAll(): Promise<Professor[]>;
    findOne(id: string): Promise<Professor>;
    findByName(professorName: string): Promise<Professor>;
    update(id: string, updateProfessorDto: UpdateProfessorDto): Promise<Professor>;
}
