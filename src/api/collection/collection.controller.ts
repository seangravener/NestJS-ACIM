import { Body, Controller, Post } from '@nestjs/common';
import { Chapter } from '../chapter/chapter.entity';
import { ChapterService } from '../chapter/chapter.service';
import { Section } from '../section/section.entity';
import { SectionService } from '../section/section.service';
import { Collection } from '../shared/collection.type';
import { DtoCollection } from './collection.dto';

@Controller('/collection')
export class CollectionController {
  constructor(
    private sectionService: SectionService,
    private chapterService: ChapterService,
  ) {}

  @Post('/add')
  async addCollection(
    @Body() dtoCollection: DtoCollection,
  ): Promise<DtoCollection> {
    const results: Collection<Chapter | Section> = [];

    // @todo move to service
    for (const dto of dtoCollection) {
      if ('number' in dto && dto.number) {
        results.push(await this.sectionService.addSection(dto));
      }

      //
      else {
        const { chapterId, title, page } = dto;
        let sections = [];

        if ('sections' in dto) {
          sections = dto.sections;
        }

        results.push(
          await this.chapterService.addChapter({
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
