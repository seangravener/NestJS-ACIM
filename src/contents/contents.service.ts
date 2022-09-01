import { Injectable } from '@nestjs/common';

import { ChapterRepository } from './chapter.repository';
import { CreateChapterDto } from './dto/add-chapter.dto';
import { AddSectionDto } from './dto/add-section.dto';
import { SectionRepository } from './section.repository';

@Injectable()
export class ContentsService {
  constructor(
    private chapterRepository: ChapterRepository,
    private sectionRepository: SectionRepository,
  ) {}

  async getChapters() {
    return this.chapterRepository.getChapters();
  }

  async createChapter(dto: CreateChapterDto) {
    return this.chapterRepository.createChapter(dto);
  }

  async addSection(dto: AddSectionDto) {
    this.sectionRepository.addSection(dto);
  }
}
