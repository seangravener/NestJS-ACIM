import { Injectable } from '@nestjs/common';

import { ContentsRepository } from './contents.repository';
import { AddChapterDto } from './dto/add-chapter.dto';

@Injectable()
export class ContentsService {
  constructor(private contentsRepository: ContentsRepository) {}

  getChapters() {
    return this.contentsRepository.getChapters();
  }

  addChapter(dto: AddChapterDto) {
    this.contentsRepository.addChapter(dto);
  }
}
