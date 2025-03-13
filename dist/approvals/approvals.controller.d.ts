import { ApprovalsService } from "./approvals.service";
import { ApprovalType } from "./entities/approval.entity";
export declare class ApprovalsController {
    private readonly approvalsService;
    constructor(approvalsService: ApprovalsService);
    create(file: Express.Multer.File, type: ApprovalType, title: string, professorId: string, courseId: string): Promise<import("./entities/approval.entity").Approval>;
    findApprovalsByCourseAndProfessor(courseId: string, professorId: string): Promise<import("./entities/approval.entity").Approval[]>;
    getApprovals(majorTitle: string, courseName: string, professorName: string, type: ApprovalType): Promise<import("./entities/approval.entity").Approval[]>;
    findAll(): Promise<import("./entities/approval.entity").Approval[]>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
