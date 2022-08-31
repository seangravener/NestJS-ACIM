import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Chapter {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  page: string;

  @OneToMany(() => Section, (section) => section.chapter)
  sections: Section[];
}

@Entity()
export class Section {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  page: string;

  @ManyToOne(() => Chapter, (chapter) => chapter.sections)
  chapter: Chapter;
}
