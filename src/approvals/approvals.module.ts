import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Professor } from '../professors/entities/professor.entity';
import { Course } from '../courses/entities/course.entity';
import { Approval } from './entities/approval.entity';
import { ApprovalsService } from './approvals.service';
import { ApprovalsController } from './approvals.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Approval, Professor, Course])],
  providers: [ApprovalsService], 
  controllers: [ApprovalsController], 
  exports: [ApprovalsService],
})
export class ApprovalsModule {} 