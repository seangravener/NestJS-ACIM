import { IsNotEmpty } from 'class-validator';
import { Section } from '../../section/section.entity';

export class AddChapterDto {
  @IsNotEmpty()
  chapterId: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  page: string;

  sections?: Section[];
}
