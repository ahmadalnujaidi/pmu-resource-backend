import { Repository } from 'typeorm';
import { Major } from './entities/major.entity';
import { CreateMajorDto } from './dtos/create-major.dto';
export declare class MajorsService {
    private majorsRepository;
    constructor(majorsRepository: Repository<Major>);
    create(createMajorDto: CreateMajorDto): Promise<Major>;
    findAll(): Promise<Major[]>;
    findOne(id: string): Promise<Major>;
    findByTitle(title: string): Promise<Major>;
    findCoursesByMajorTitle(title: string): Promise<import("../courses/entities/course.entity").Course[]>;
}
