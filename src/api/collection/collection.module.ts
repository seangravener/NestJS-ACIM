import { Module } from '@nestjs/common';
import { ChapterModule } from '../chapter/chapter.module';
import { SectionModule } from '../section/section.module';
import { CollectionController } from './collection.controller';

@Module({
  imports: [ChapterModule, SectionModule],
  controllers: [CollectionController],
})
export class CollectionModule {}
