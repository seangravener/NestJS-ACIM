import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChapterDto } from './dto/add-chapter.dto';

import { Chapter } from './entities/chapter.entity';

@Injectable()
export class ChapterRepository {
  constructor(
    @InjectRepository(Chapter)
    private dataSource: Repository<Chapter>,
  ) {}

  async getChapters(): Promise<Chapter[]> {
    return [];
  }

  async getChapter(id: string): Promise<Chapter> {
    return this.dataSource.findOne({ where: { id } });
  }

  async createChapter(dto: CreateChapterDto): Promise<Chapter> {
    const { page, title } = dto;

    const chapter = this.dataSource.create({
      page,
      title,
    });

    return await this.dataSource.save(chapter);
  }
}
