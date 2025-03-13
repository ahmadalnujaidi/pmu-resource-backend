import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Course } from '../../courses/entities/course.entity';

@Entity('majors')
export class Major {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  college: string;

  @ManyToMany(() => Course, course => course.majors)
  @JoinTable({
    name: 'major_course',
    joinColumn: {
      name: 'major_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'course_id',
      referencedColumnName: 'id',
    },
  })
  courses: Course[];
} 