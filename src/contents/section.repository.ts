import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Chapter } from './entities/chapter.entity';
import { Section } from './entities/section.entity';
import { AddSectionDto } from './dto/add-section.dto';
import { ChapterRepository } from './chapter.repository';

@Injectable()
export class SectionRepository {
  constructor(
    @InjectRepository(Section)
    private dataSource: Repository<Section>,
    private chapterRepository: ChapterRepository,
  ) {}

  async addSection(dto: AddSectionDto): Promise<Section> {
    const { chapterId, page, title } = dto;

    const chapter = await this.chapterRepository.getChapter(chapterId);
    console.log(chapter);

    const section = await this.dataSource.create({
      chapter,
      title,
      page,
    });
    console.log(section);

    return await this.dataSource.save(section);
  }
}
