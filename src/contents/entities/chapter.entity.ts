import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Chapter {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  page: string;

  // @OneToMany(() => ChapterSection, (section) => section.chapter, {
  //   eager: true,
  // })
  // sections: ChapterSection[];
}

@Entity()
export class ChapterSection {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  page: string;

  // @ManyToOne(() => Chapter, (chapter) => chapter.sections, {
  //   eager: false,
  // })
  chapter: Chapter;
}
