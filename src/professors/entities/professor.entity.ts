import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany } from 'typeorm';
import { Course } from '../../courses/entities/course.entity';
import { Material } from '../../materials/entities/material.entity';

@Entity('professors')
export class Professor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'professor_name' })
  professorName: string;

  @ManyToMany(() => Course, course => course.professors)
  courses: Course[];

  @OneToMany(() => Material, material => material.professor)
  materials: Material[];
} 