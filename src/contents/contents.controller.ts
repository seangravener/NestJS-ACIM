import { Body, Controller, Get, Post } from '@nestjs/common';

import { ContentsService } from './contents.service';
import { AddChapterDto } from './dtos/add-chapter.dto';
import { AddSectionDto } from './dtos/add-section.dto';
import { Chapter } from './entities/chapter.entity';
import { Section } from './entities/section.entity';
import { Collection } from './interfaces/collection.interface';

@Controller('contents')
export class ContentsController {
  constructor(private contentsService: ContentsService) {}

  @Get()
  getContents() {
    return { contents: [1, 2, 3] };
  }

  @Get('/chapters')
  getChapters() {
    return this.contentsService.getChapters();
  }

  @Post('/add/chapter')
  async addChapter(@Body() dto: AddChapterDto): Promise<Chapter> {
    return this.contentsService.addChapter(dto);
  }

  @Post('/add/section')
  async addSection(@Body() dto: AddSectionDto): Promise<Section> {
    return this.contentsService.addSection(dto);
  }

  // @todo move collection logic to service
  @Post('/add/collection')
  async addCollection(
    @Body() dtos: Collection<Chapter | Section>,
  ): Promise<Collection<Chapter | Section>> {
    const results: Collection<Chapter | Section> = [];

    for (const dto of dtos) {
      if ('number' in dto && dto.number) {
        results.push(await this.contentsService.addSection(dto));
      } else {
        let sections = [];
        const { chapterId, title, page } = dto;

        if ('sections' in dto) {
          sections = dto.sections;
        }

        results.push(
          await this.contentsService.addChapter({
            chapterId,
            title,
            page,
            sections,
          }),
        );
      }
    }

    return results;
  }
}
