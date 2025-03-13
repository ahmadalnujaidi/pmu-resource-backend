import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Material, MaterialType } from "./entities/material.entity";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client, s3Bucket } from "../config/s3.config";
import { Professor } from "../professors/entities/professor.entity";
import { Course } from "../courses/entities/course.entity";

@Injectable()
export class MaterialsService {
  constructor(
    @InjectRepository(Material)
    private materialsRepository: Repository<Material>,
    @InjectRepository(Professor)
    private professorsRepository: Repository<Professor>,
    @InjectRepository(Course)
    private coursesRepository: Repository<Course>
  ) {}

  async create(
    data: string,
    type: MaterialType,
    title: string,
    professorId: string,
    courseId: string
  ): Promise<Material> {
    // Validate professor and course exist
    const professor = await this.professorsRepository.findOne({
      where: { id: professorId },
    });
    if (!professor) {
      throw new NotFoundException(`Professor with ID ${professorId} not found`);
    }

    const course = await this.coursesRepository.findOne({
      where: { id: courseId },
    });
    if (!course) {
      throw new NotFoundException(`Course with ID ${courseId} not found`);
    }

    // // Upload file to S3
    // const key = `${Date.now()}-${file.originalname}`;
    // const command = new PutObjectCommand({
    //   Bucket: s3Bucket,
    //   Key: key,
    //   Body: file.buffer,
    //   ContentType: 'application/pdf',
    // });

    // await s3Client.send(command);
    // const url = `https://${s3Bucket}.s3.amazonaws.com/${key}`;

    // Create and save material
    const material = this.materialsRepository.create({
      type,
      title,
      data,
      professor: { id: professorId },
      course: { id: courseId },
    });

    return this.materialsRepository.save(material);
  }

  async findAll(): Promise<Material[]> {
    return this.materialsRepository.find({
      relations: ["professor", "course"],
    });
  }

  async findByMajorCourseProfessorAndType(
    majorTitle: string,
    courseName: string,
    professorName: string,
    type: MaterialType
  ): Promise<Material[]> {
    // This query finds materials that match the given criteria
    // It joins across the relationships to filter by major title, course name, professor name, and material type
    const materials = await this.materialsRepository
      .createQueryBuilder("material")
      .innerJoinAndSelect("material.course", "course")
      .innerJoinAndSelect("material.professor", "professor")
      .innerJoin("course.majors", "major")
      .where("major.title = :majorTitle", { majorTitle })
      .andWhere("course.courseName = :courseName", { courseName })
      .andWhere("professor.professorName = :professorName", { professorName })
      .andWhere("material.type = :type", { type })
      .getMany();

    if (materials.length === 0) {
      throw new NotFoundException(
        `No materials found for major: ${majorTitle}, course: ${courseName}, professor: ${professorName}, type: ${type}`
      );
    }

    return materials;
  }
  async findMaterialsByCourseAndProfessor(
    courseId: string,
    professorId: string
  ): Promise<Material[]> {
    const materials = await this.materialsRepository.find({
      where: {
        course: { id: courseId },
        professor: { id: professorId },
      },
      relations: ["course", "professor"],
    });

    if (materials.length === 0) {
      throw new NotFoundException(
        `No materials found for course ID ${courseId} and professor ID ${professorId}`
      );
    }

    return materials;
  }
}
