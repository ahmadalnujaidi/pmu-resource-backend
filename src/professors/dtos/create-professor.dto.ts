import { IsNotEmpty, IsString, IsArray, IsOptional, IsUUID } from 'class-validator';

export class CreateProfessorDto {
  @IsNotEmpty({ message: 'Professor name is required' })
  @IsString()
  professorName: string;

  @IsOptional()
  @IsArray()
  @IsUUID(4, { each: true, message: 'Each course ID must be a valid UUID' })
  courseIds?: string[];
} 