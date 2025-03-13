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

import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { ApprovalsService } from "./approvals.service";
import { ApprovalType } from "./entities/approval.entity";

@Controller("approvals")
export class ApprovalsController {
  constructor(private readonly approvalsService: ApprovalsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
    FileInterceptor("file", { limits: { fileSize: 80 * 1024 * 1024 } })
  )
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body("type", new ParseEnumPipe(ApprovalType)) type: ApprovalType,
    @Body("title") title: string,
    @Body("professor_id") professorId: string,
    @Body("course_id") courseId: string
  ) {
    return this.approvalsService.create(
      file,
      type,
      title,
      professorId,
      courseId
    );
  }

  @Get("course/:courseId/professor/:professorId")
  @UseGuards(JwtAuthGuard) // Optional: Use this guard if you want to restrict access
  async findApprovalsByCourseAndProfessor(
    @Param("courseId") courseId: string,
    @Param("professorId") professorId: string
  ) {
    return this.approvalsService.findApprovalsByCourseAndProfessor(
      courseId,
      professorId
    );
  }

  @Get(":majorTitle/:courseName/:professorName/:type")
  async getApprovals(
    @Param("majorTitle") majorTitle: string,
    @Param("courseName") courseName: string,
    @Param("professorName") professorName: string,
    @Param("type", new ParseEnumPipe(ApprovalType)) type: ApprovalType
  ) {
    return this.approvalsService.findByMajorCourseProfessorAndType(
      majorTitle,
      courseName,
      professorName,
      type
    );
  }

  @Get()
  // @UseGuards(JwtAuthGuard)
  async findAll() {
    return this.approvalsService.findAll();
  }
  // delete approval
  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.approvalsService.delete(id);
  }
}
