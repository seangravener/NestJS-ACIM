import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Section } from './section.entity';

@Entity()
export class Chapter {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  page: string;

  @OneToMany(() => Section, (section) => section.chapter, { cascade: true })
  sections: Section[];
}
