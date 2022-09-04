import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChapterService } from './chapter.service';
import { Chapter } from './chapter.entity';
import { AddChapterDto } from './dtos/add-chapter.dto';

@Controller('/chapter')
export class ChapterController {
  constructor(private chapterService: ChapterService) {}

  @Get()
  getChapters() {
    return this.chapterService.getChapters();
  }

  @Post('/add')
  async addChapter(@Body() dto: AddChapterDto): Promise<Chapter> {
    return this.chapterService.addChapter(dto);
  }
}
