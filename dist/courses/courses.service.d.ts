import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { CreateCourseDto } from './dtos/create-course.dto';
import { Major } from '../majors/entities/major.entity';
import { UpdateCourseDto } from './dtos/update-course.dto';
export declare class CoursesService {
    private coursesRepository;
    private majorsRepository;
    constructor(coursesRepository: Repository<Course>, majorsRepository: Repository<Major>);
    create(createCourseDto: CreateCourseDto): Promise<Course>;
    findAll(): Promise<Course[]>;
    findOne(id: string): Promise<Course>;
    findByName(courseName: string): Promise<Course>;
    update(id: string, updateCourseDto: UpdateCourseDto): Promise<Course>;
}
