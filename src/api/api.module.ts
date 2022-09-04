import { Module } from '@nestjs/common';

import { SectionModule } from './section/section.module';
import { ChapterModule } from './chapter/chapter.module';
import { APIController } from './api.controller';

@Module({
  imports: [ChapterModule, SectionModule],
  controllers: [APIController],
})
export class APIModule {}
