import { IsNotEmpty, IsEnum, IsUUID } from "class-validator";
import { MaterialType } from "../entities/material.entity";

export class CreateMaterialDto {
  @IsNotEmpty({ message: "Type is required" })
  @IsEnum(MaterialType, {
    message: "Type must be one of: notes, assignments, olds",
  })
  type: string;

  @IsNotEmpty({ message: "Title is required" })
  title: string;

  @IsNotEmpty({ message: "Professor ID is required" })
  @IsUUID(4, { message: "Professor ID must be a valid UUID" })
  professorId: string;

  @IsNotEmpty({ message: "Course ID is required" })
  @IsUUID(4, { message: "Course ID must be a valid UUID" })
  courseId: string;
}
