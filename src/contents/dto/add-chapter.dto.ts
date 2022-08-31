import { IsNotEmpty } from 'class-validator';

export class AddChapterDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  page: string;
}
