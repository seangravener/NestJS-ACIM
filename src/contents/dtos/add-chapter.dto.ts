import { IsNotEmpty } from 'class-validator';
import { Section } from '../entities/section.entity';

export class AddChapterDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  page: string;

  sections?: Section[];
}
