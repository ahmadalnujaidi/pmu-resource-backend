import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MajorsService } from './majors.service';
import { MajorsController } from './majors.controller';
import { Major } from './entities/major.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Major])],
  providers: [MajorsService],
  controllers: [MajorsController],
  exports: [MajorsService],
})
export class MajorsModule {} 