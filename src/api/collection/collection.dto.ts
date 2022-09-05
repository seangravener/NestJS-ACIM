import { Collection } from '../shared/types';

import { Chapter } from '../chapter/chapter.entity';
import { Section } from '../section/section.entity';

import { AddChapterDto } from '../chapter/dtos/add-chapter.dto';
import { AddSectionDto } from '../section/dtos/add-section.dto';

export type DtoCollection = Collection<AddChapterDto | AddSectionDto>;
export type EntityCollection = Collection<Chapter | Section>;
