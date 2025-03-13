import { IsArray, IsUUID } from "class-validator";

export class UpdateCourseDto {
  @IsArray()
  @IsUUID(4, { each: true, message: 'Each major ID must be a valid UUID' })
  majorIds?: string[];
}

