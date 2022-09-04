import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Chapter } from '../../api/chapter/chapter.entity';

@Entity()
export class Section {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  number: string;

  @Column()
  page: string;

  @Column()
  title: string;

  @Column()
  chapterId: string;

  @ManyToOne(() => Chapter, (chapter) => chapter.sections)
  @JoinColumn({ name: 'chapterId' })
  chapter: Chapter;
}
