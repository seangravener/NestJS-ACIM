import { Chapter } from 'src/api/chapter/chapter.entity';
import { Section } from 'src/api/section/section.entity';
import { Collection } from '../shared/collection.type';

export type DtoCollection = Collection<Chapter | Section>;
