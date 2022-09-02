import { Injectable } from '@nestjs/common';

import { ChapterRepository } from './repos/chapter.repository';
import { AddChapterDto } from './dtos/add-chapter.dto';
import { AddSectionDto } from './dtos/add-section.dto';
import { SectionRepository } from './repos/section.repository';
import { Chapter } from './entities/chapter.entity';
import { Section } from './entities/section.entity';

@Injectable()
export class ContentsService {
  constructor(
    private chapterRepository: ChapterRepository,
    private sectionRepository: SectionRepository,
  ) {}

  async getChapters() {
    return this.chapterRepository.getAll();
  }

  async addChapter(dto: AddChapterDto): Promise<Chapter> {
    return this.chapterRepository.addChapter(dto);
  }

  async addSection(dto: AddSectionDto): Promise<Section> {
    return this.sectionRepository.addSection(dto);
  }
}
