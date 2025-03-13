import { MajorsService } from './majors.service';
import { CreateMajorDto } from './dtos/create-major.dto';
export declare class MajorsController {
    private readonly majorsService;
    constructor(majorsService: MajorsService);
    create(createMajorDto: CreateMajorDto): Promise<import("./entities/major.entity").Major>;
    findAll(): Promise<import("./entities/major.entity").Major[]>;
    findOne(id: string): Promise<import("./entities/major.entity").Major>;
    findCoursesByMajorTitle(majorTitle: string): Promise<import("../courses/entities/course.entity").Course[]>;
}
