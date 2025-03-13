import { IsNotEmpty, IsEnum, IsUUID } from 'class-validator';
import { ApprovalType } from '../entities/approval.entity';

export class CreateApprovalDto {
  @IsNotEmpty({ message: 'Type is required' })
  @IsEnum(ApprovalType, { message: 'Type must be one of: notes, assignments, olds' })
  type: ApprovalType;

  @IsNotEmpty({message: 'Title is required'})
  title: string;

  @IsNotEmpty({ message: 'Professor ID is required' })
  @IsUUID(4, { message: 'Professor ID must be a valid UUID' })
  professorId: string;

  @IsNotEmpty({ message: 'Course ID is required' })
  @IsUUID(4, { message: 'Course ID must be a valid UUID' })
  courseId: string;
} 