import { Body, Controller, Post } from '@nestjs/common';

import { ChapterService } from '../chapter/chapter.service';
import { SectionService } from '../section/section.service';

import { DtoCollection, EntityCollection } from './collection.dto';

@Controller('/collection')
export class CollectionController {
  constructor(
    private sectionService: SectionService,
    private chapterService: ChapterService,
  ) {}

  @Post('/add')
  async addCollection(
    @Body() dtoCollection: DtoCollection,
  ): Promise<EntityCollection> {
    const results: EntityCollection = [];

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
