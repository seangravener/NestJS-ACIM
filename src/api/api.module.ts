import { Module } from '@nestjs/common';

import { SectionModule } from './section/section.module';
import { ChapterModule } from './chapter/chapter.module';
import { APIController } from './api.controller';
import { CollectionModule } from './collection/collection.module';

@Module({
  imports: [ChapterModule, SectionModule, CollectionModule],
  controllers: [APIController],
})
export class APIModule {}
