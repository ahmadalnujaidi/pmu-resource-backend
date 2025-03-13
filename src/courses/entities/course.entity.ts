import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, JoinTable } from 'typeorm';
import { Major } from '../../majors/entities/major.entity';
import { Professor } from '../../professors/entities/professor.entity';
import { Material } from '../../materials/entities/material.entity';

@Entity('courses')
export class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'course_name' })
  courseName: string;

  @ManyToMany(() => Major, major => major.courses)
  majors: Major[];

  @ManyToMany(() => Professor, professor => professor.courses)
  @JoinTable({
    name: 'course_professor',
    joinColumn: {
      name: 'course_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'professor_id',
      referencedColumnName: 'id',
    },
  })
  professors: Professor[];

  @OneToMany(() => Material, material => material.course)
  materials: Material[];
} 