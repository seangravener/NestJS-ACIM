import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContentsService } from './contents.service';
import { CreateChapterDto } from './dto/add-chapter.dto';
import { AddSectionDto } from './dto/add-section.dto';
import { Chapter } from './entities/chapter.entity';

@Controller('contents')
export class ContentsController {
  constructor(private contentsService: ContentsService) {}

  @Get()
  getContents() {
    return { contents: [1, 2, 3] };
  }

  @Post()
  async createChapter(@Body() dto: CreateChapterDto): Promise<Chapter> {
    return this.contentsService.createChapter(dto);
  }

  @Post('/add')
  async addSections(@Body() dto: AddSectionDto): Promise<void> {
    return this.contentsService.addSection(dto);
  }

  addSection() {}
}
