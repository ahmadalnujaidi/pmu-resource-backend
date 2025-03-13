import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client, s3Bucket } from "../config/s3.config";
import { Professor } from "../professors/entities/professor.entity";
import { Course } from "../courses/entities/course.entity";
import { Approval, ApprovalType } from "./entities/approval.entity";

@Injectable()
export class ApprovalsService {
  constructor(
    @InjectRepository(Approval)
    private approvalsRepository: Repository<Approval>,
    @InjectRepository(Professor)
    private professorsRepository: Repository<Professor>,
    @InjectRepository(Course)
    private coursesRepository: Repository<Course>
  ) {}

  async create(
    file: Express.Multer.File,
    type: ApprovalType,
    title: string,
    professorId: string,
    courseId: string
  ): Promise<Approval> {
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

    // Upload file to S3
    const key = `${Date.now()}-${file.originalname}`;
    const command = new PutObjectCommand({
      Bucket: s3Bucket,
      Key: key,
      Body: file.buffer,
      ContentType: "application/pdf",
    });

    await s3Client.send(command);
    const url = `https://${s3Bucket}.s3.amazonaws.com/${key}`;

    // Create and save approval
    const approval = this.approvalsRepository.create({
      type,
      title,
      data: url,
      professor: { id: professorId },
      course: { id: courseId },
    });

    return this.approvalsRepository.save(approval);
  }

  async findByMajorCourseProfessorAndType(
    majorTitle: string,
    courseName: string,
    professorName: string,
    type: ApprovalType
  ): Promise<Approval[]> {
    // This query finds approvals that match the given criteria
    // It joins across the relationships to filter by major title, course name, professor name, and approval type
    const approvals = await this.approvalsRepository
      .createQueryBuilder("approval")
      .innerJoinAndSelect("approval.course", "course")
      .innerJoinAndSelect("approval.professor", "professor")
      .innerJoin("course.majors", "major")
      .where("major.title = :majorTitle", { majorTitle })
      .andWhere("course.courseName = :courseName", { courseName })
      .andWhere("professor.professorName = :professorName", { professorName })
      .andWhere("approval.type = :type", { type })
      .getMany();

    if (approvals.length === 0) {
      throw new NotFoundException(
        `No approvals found for major: ${majorTitle}, course: ${courseName}, professor: ${professorName}, type: ${type}`
      );
    }

    return approvals;
  }
  async findApprovalsByCourseAndProfessor(
    courseId: string,
    professorId: string
  ): Promise<Approval[]> {
    const approvals = await this.approvalsRepository.find({
      where: {
        course: { id: courseId },
        professor: { id: professorId },
      },
      relations: ["course", "professor"],
    });

    if (approvals.length === 0) {
      throw new NotFoundException(
        `No approvals found for course ID ${courseId} and professor ID ${professorId}`
      );
    }

    return approvals;
  }
  // select all approvals from the postgres database and return them
  async findAll(): Promise<Approval[]> {
    return this.approvalsRepository.find({
      relations: ["professor", "course"],
    });
  }

  // delete approval from the postgres database
  async delete(id: string) {
    return this.approvalsRepository.delete(id);
  }
}
