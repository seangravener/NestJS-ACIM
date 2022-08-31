import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Chapter } from './entities/chapter.entity';
import { AddChapterDto } from './dto/add-chapter.dto';

@Injectable()
export class ContentsRepository {
  constructor(
    @InjectRepository(Chapter)
    private dataSource: Repository<Chapter>,
  ) {}

  async getChapters(): Promise<Chapter[]> {
    return [];
  }

  async addChapter(dto: AddChapterDto): Promise<void> {
    const { page, title } = dto;

    // const task = this.dataSource.create({
    //   page,
    //   title,
    // });

    // return await this.dataSource.save(task);
  }
}
