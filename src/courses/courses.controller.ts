import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  UseGuards,
  Put,
  Delete,
} from "@nestjs/common";
import { CoursesService } from "./courses.service";
import { CreateCourseDto } from "./dtos/create-course.dto";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { AdminGuard } from "../auth/guards/admin.guard";
import { UpdateCourseDto } from "./dtos/update-course.dto";

@Controller("courses")
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @UseGuards(JwtAuthGuard, AdminGuard)
  async create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  async findAll() {
    return this.coursesService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.coursesService.findOne(id);
  }

  // update course and add majors to it
  @Put(":id")
  @UseGuards(JwtAuthGuard, AdminGuard)
  async update(
    @Param("id") id: string,
    @Body() updateCourseDto: UpdateCourseDto
  ) {
    return this.coursesService.update(id, updateCourseDto);
  }
  // delete
  @Delete(":id")
  @UseGuards(JwtAuthGuard, AdminGuard)
  async remove(@Param("id") id: string) {
    return this.coursesService.remove(id);
  }
}
