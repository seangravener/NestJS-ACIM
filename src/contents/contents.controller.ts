import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContentsService } from './contents.service';
import { AddChapterDto } from './dtos/add-chapter.dto';
import { AddSectionDto } from './dtos/add-section.dto';
import { Chapter } from './entities/chapter.entity';
import { Section } from './entities/section.entity';

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

  // @todo rename
  // @todo use dto for union type
  @Post('/add/chapters-and-sections')
  async addChaptersAndSections(
    @Body() dtos: (Chapter | Section)[],
  ): Promise<(Chapter | Section)[]> {
    const results: (Chapter | Section)[] = [];

    for (const dto of dtos) {
      if ('number' in dto) {
        console.log('add section: ', dto);
        results.push(await this.contentsService.addSection(dto));
      }

      //
      else {
        console.log('add chapter: ', dto);
        results.push(await this.contentsService.addChapter(dto));
      }
    }

    return results;
  }
}
