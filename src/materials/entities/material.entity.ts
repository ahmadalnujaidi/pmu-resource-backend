import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
} from "typeorm";
import { Professor } from "../../professors/entities/professor.entity";
import { Course } from "../../courses/entities/course.entity";

export enum MaterialType {
  NOTES = "notes",
  ASSIGNMENTS = "assignments",
  OLDS = "olds",
}

@Entity("materials")
export class Material {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "enum",
    enum: MaterialType,
  })
  type: string;

  @Column()
  title: string;

  @Column()
  data: string; // S3 URL

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @ManyToOne(() => Professor, (professor) => professor.materials)
  @JoinColumn({ name: "professor_id" })
  professor: Professor;

  @ManyToOne(() => Course, (course) => course.materials)
  @JoinColumn({ name: "course_id" })
  course: Course;
}
