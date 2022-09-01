import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentsController } from './contents.controller';
import { ChapterRepository } from './chapter.repository';
import { ContentsService } from './contents.service';
import { Chapter } from './entities/chapter.entity';
import { SectionRepository } from './section.repository';
import { Section } from './entities/section.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chapter, Section])],
  controllers: [ContentsController],
  providers: [ContentsService, ChapterRepository, SectionRepository],
})
export class ContentsModule {}
