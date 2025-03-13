import { Repository } from "typeorm";
import { Professor } from "../professors/entities/professor.entity";
import { Course } from "../courses/entities/course.entity";
import { Approval, ApprovalType } from "./entities/approval.entity";
export declare class ApprovalsService {
    private approvalsRepository;
    private professorsRepository;
    private coursesRepository;
    constructor(approvalsRepository: Repository<Approval>, professorsRepository: Repository<Professor>, coursesRepository: Repository<Course>);
    create(file: Express.Multer.File, type: ApprovalType, title: string, professorId: string, courseId: string): Promise<Approval>;
    findByMajorCourseProfessorAndType(majorTitle: string, courseName: string, professorName: string, type: ApprovalType): Promise<Approval[]>;
    findApprovalsByCourseAndProfessor(courseId: string, professorId: string): Promise<Approval[]>;
    findAll(): Promise<Approval[]>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
