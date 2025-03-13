import { ApprovalType } from '../entities/approval.entity';
export declare class CreateApprovalDto {
    type: ApprovalType;
    title: string;
    professorId: string;
    courseId: string;
}
