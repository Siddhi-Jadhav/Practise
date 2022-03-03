import { Exclude } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';
//this is data transfer object
//which is used to transfer data from one to another entity
export class UpdateBlogDTO {
  @IsOptional()
  @Exclude()
  id: string;

  @IsNotEmpty()
  @IsOptional()
  title: string;

  @IsNotEmpty()
  @IsOptional()
  content: string;

  tags: string;
}
