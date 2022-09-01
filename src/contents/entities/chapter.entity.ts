import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Section } from './section.entity';

@Entity()
export class Chapter {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  page: string;

  @OneToMany(() => Section, (section) => section.chapter)
  sections: Section[];
}
