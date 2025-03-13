import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMajorDto {
  @IsNotEmpty({ message: 'Title is required' })
  @IsString()
  title: string;

  @IsNotEmpty({ message: 'College is required' })
  @IsString()
  college: string;
} 