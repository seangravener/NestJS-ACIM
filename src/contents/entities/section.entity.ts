import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Chapter } from './chapter.entity';

@Entity()
export class Section {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  number: number;

  @Column()
  page: number;

  @Column()
  title: string;

  @Column()
  chapterId: string;

  @ManyToOne(() => Chapter, (chapter) => chapter.sections)
  @JoinColumn({ name: 'chapterId' })
  chapter: Chapter;
}
