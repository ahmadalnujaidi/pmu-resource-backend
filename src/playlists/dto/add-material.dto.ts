import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class AddMaterialDto {
  @IsNotEmpty()
  @IsUUID()
  materialId: string;
}
