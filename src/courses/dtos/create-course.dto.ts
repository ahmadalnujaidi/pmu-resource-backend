import { IsNotEmpty, IsString, IsArray, IsOptional, IsUUID } from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty({ message: 'Course name is required' })
  @IsString()
  courseName: string;

  @IsOptional()
  @IsArray()
  @IsUUID(4, { each: true, message: 'Each major ID must be a valid UUID' })
  majorIds?: string[];
} 