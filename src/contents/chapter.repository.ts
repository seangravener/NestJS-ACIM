import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddChapterDto } from './dto/add-chapter.dto';

import { Chapter } from './entities/chapter.entity';

@Injectable()
export class ChapterRepository {
  constructor(
    @InjectRepository(Chapter)
    private dataSource: Repository<Chapter>,
  ) {}

  async getAllChapters(): Promise<Chapter[]> {
    return this.dataSource.find({ relations: ['sections'] });
  }

  async getChapter(id: string): Promise<Chapter> {
    return this.dataSource.findOne({ where: { id } });
  }

  async addChapter(dto: AddChapterDto): Promise<Chapter> {
    const chapter = this.dataSource.create({ ...dto });
    return await this.dataSource.save(chapter);
  }
}
