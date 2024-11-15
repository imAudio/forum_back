import { IsString, IsNotEmpty, IsOptional, IsNumber } from "class-validator";

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsOptional()
  @IsNumber()
  id_user: number;
}
