import { Injectable } from '@nestjs/common';

import { ChapterRepository } from './chapter.repository';
import { AddChapterDto } from './dto/add-chapter.dto';
import { AddSectionDto } from './dto/add-section.dto';
import { SectionRepository } from './section.repository';

@Injectable()
export class ContentsService {
  constructor(
    private chapterRepository: ChapterRepository,
    private sectionRepository: SectionRepository,
  ) {}

  async getChapters() {
    return this.chapterRepository.getAllChapters();
  }

  async addChapter(dto: AddChapterDto) {
    return this.chapterRepository.addChapter(dto);
  }

  async addSection(dto: AddSectionDto) {
    return this.sectionRepository.addSection(dto);
  }
}
