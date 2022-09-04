import { Injectable } from '@nestjs/common';

import { ChapterRepository } from './chapter.repository';
import { AddChapterDto } from './dtos/add-chapter.dto';
import { Chapter } from './chapter.entity';

@Injectable()
export class ChapterService {
  constructor(private chapterRepository: ChapterRepository) {}

  async getChapters() {
    return this.chapterRepository.getAll();
  }

  async addChapter(dto: AddChapterDto): Promise<Chapter> {
    return this.chapterRepository.addChapter(dto);
  }
}
