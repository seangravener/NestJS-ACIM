import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddChapterDto } from '../dtos/add-chapter.dto';

import { Chapter } from '../entities/chapter.entity';

@Injectable()
export class ChapterRepository {
  constructor(
    @InjectRepository(Chapter)
    private dataSource: Repository<Chapter>,
  ) {}

  async getAll(): Promise<Chapter[]> {
    return this.getChaptersWithSections();
  }

  async getChapter(
    chapterId: string,
    relations: string[] = [],
  ): Promise<Chapter> {
    return this.dataSource.findOne({ where: { chapterId }, relations });
  }

  async getChapterWithSection(id: string): Promise<Chapter> {
    return this.getChapter(id, ['sections']);
  }

  async getChaptersWithSections(): Promise<Chapter[]> {
    return this.dataSource.find({ relations: ['sections'] });
  }

  async addChapter(dto: AddChapterDto): Promise<Chapter> {
    const chapter = this.dataSource.create({ ...dto });
    return await this.dataSource.save(chapter);
  }
}
