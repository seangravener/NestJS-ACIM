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
  title: string;

  @Column()
  page: string;

  @ManyToOne(() => Chapter, (chapter) => chapter.sections)
  @JoinColumn({ name: 'chapterId' })
  chapter: Chapter;

  @Column()
  chapterId: string;
}
