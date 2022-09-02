import { IsNotEmpty } from 'class-validator';

export class AddSectionDto {
  @IsNotEmpty()
  chapterId: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  page: number;

  @IsNotEmpty()
  number: number;
}
