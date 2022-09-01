import { IsNotEmpty } from 'class-validator';
import { Section } from '../entities/section.entity';

export class CreateChapterDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  page: string;

  sections?: Section[];
}
