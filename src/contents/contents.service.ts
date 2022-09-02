import { Injectable } from '@nestjs/common';

import { ChapterRepository } from './repos/chapter.repository';
import { AddChapterDto } from './dtos/add-chapter.dto';
import { AddSectionDto } from './dtos/add-section.dto';
import { SectionRepository } from './repos/section.repository';

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
    const { sections } = dto;

    if (sections) {
      // this.chapterRepository.addChapter({ ..dto }); // exclude sections
      //  this.sectionRepository.addSection(); // add to chapter with id (id is optional in this mode)
      console.log('has sections', dto);
    }

    return this.chapterRepository.addChapter(dto);
  }

  async addSection(dto: AddSectionDto) {
    return this.sectionRepository.addSection(dto);
  }
}
