import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Section } from '../section/section.entity';

@Entity()
export class Chapter {
  @PrimaryColumn()
  chapterId: string;

  @Column()
  title: string;

  @Column()
  page: string;

  @OneToMany(() => Section, (section) => section.chapter, { cascade: true })
  sections: Section[];
}
