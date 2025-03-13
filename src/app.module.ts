import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MajorsModule } from './majors/majors.module';
import { CoursesModule } from './courses/courses.module';
import { ProfessorsModule } from './professors/professors.module';
import { MaterialsModule } from './materials/materials.module';
import { databaseConfig } from './config/database.config';
import { SuggestionsModule } from './suggestions/suggestions.module';
import { ApprovalsModule } from './approvals/approvals.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    UsersModule,
    AuthModule,
    MajorsModule,
    CoursesModule,
    ProfessorsModule,
    MaterialsModule,
    SuggestionsModule,
    ApprovalsModule
  ],
})
export class AppModule {} 