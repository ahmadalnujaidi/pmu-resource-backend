import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Course } from "./entities/course.entity";
import { CreateCourseDto } from "./dtos/create-course.dto";
import { Major } from "../majors/entities/major.entity";
import { UpdateCourseDto } from "./dtos/update-course.dto";

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private coursesRepository: Repository<Course>,
    @InjectRepository(Major)
    private majorsRepository: Repository<Major>
  ) {}

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const { courseName, majorIds } = createCourseDto;

    const course = this.coursesRepository.create({
      courseName,
    });

    if (majorIds && majorIds.length > 0) {
      const majors = await this.majorsRepository.findByIds(majorIds);
      course.majors = majors;
    }

    return this.coursesRepository.save(course);
  }

  async findAll(): Promise<Course[]> {
    return this.coursesRepository.find({
      relations: ["majors", "professors"],
    });
  }

  async findOne(id: string): Promise<Course> {
    const course = await this.coursesRepository.findOne({
      where: { id },
      relations: ["majors", "professors"],
    });

    if (!course) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }

    return course;
  }

  async findByName(courseName: string): Promise<Course> {
    const course = await this.coursesRepository.findOne({
      where: { courseName },
      relations: ["majors", "professors"],
    });

    if (!course) {
      throw new NotFoundException(`Course with name ${courseName} not found`);
    }

    return course;
  }

  // update course and add major to it
  async update(id: string, updateCourseDto: UpdateCourseDto): Promise<Course> {
    const { majorIds } = updateCourseDto;
    const course = await this.findOne(id);
    course.majors = await this.majorsRepository.findByIds(majorIds);
    return this.coursesRepository.save(course);
  }
  // delete course
  async remove(id: string): Promise<void> {
    const course = await this.findOne(id);
    await this.coursesRepository.remove(course);
  }
}
