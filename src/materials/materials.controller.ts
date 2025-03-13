import {
  Controller,
  Post,
  Get,
  Param,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  Body,
  ParseEnumPipe,
  Delete,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { MaterialsService } from "./materials.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { MaterialType } from "./entities/material.entity";

@Controller()
export class MaterialsController {
  constructor(private readonly materialsService: MaterialsService) {}

  @Post("materials")
  @UseGuards(JwtAuthGuard)
  async create(
    @Body("data") data: string,
    @Body("type", new ParseEnumPipe(MaterialType)) type: MaterialType,
    @Body("title") title: string,
    @Body("professor_id") professorId: string,
    @Body("course_id") courseId: string
  ) {
    return this.materialsService.create(
      data,
      type,
      title,
      professorId,
      courseId
    );
  }

  @Get("course/:courseId/professor/:professorId")
  @UseGuards(JwtAuthGuard) // Optional: Use this guard if you want to restrict access
  async findMaterialsByCourseAndProfessor(
    @Param("courseId") courseId: string,
    @Param("professorId") professorId: string
  ) {
    return this.materialsService.findMaterialsByCourseAndProfessor(
      courseId,
      professorId
    );
  }

  @Get(":majorTitle/:courseName/:professorName/:type")
  async getMaterials(
    @Param("majorTitle") majorTitle: string,
    @Param("courseName") courseName: string,
    @Param("professorName") professorName: string,
    @Param("type", new ParseEnumPipe(MaterialType)) type: MaterialType
  ) {
    return this.materialsService.findByMajorCourseProfessorAndType(
      majorTitle,
      courseName,
      professorName,
      type
    );
  }
}
