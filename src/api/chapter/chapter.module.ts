import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SectionModule } from '../section/section.module';

import { ChapterRepository } from './chapter.repository';
import { ChapterController } from './chapter.controller';
import { ChapterService } from './chapter.service';
import { Chapter } from './chapter.entity';

@Module({
  imports: [SectionModule, TypeOrmModule.forFeature([Chapter])],
  controllers: [ChapterController],
  providers: [ChapterRepository, ChapterService],
  exports: [ChapterService],
})
export class ChapterModule {}
