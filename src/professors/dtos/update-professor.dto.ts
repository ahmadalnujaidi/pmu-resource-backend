import { IsArray, IsUUID } from "class-validator";

export class UpdateProfessorDto {
  @IsArray()
  @IsUUID(4, { each: true, message: 'Each course ID must be a valid UUID' })
  courseIds?: string[];
}


