import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentsController } from './contents.controller';
import { ContentsRepository } from './contents.repository';
import { ContentsService } from './contents.service';
import { Chapter } from './entities/chapter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chapter])],
  controllers: [ContentsController],
  providers: [ContentsService, ContentsRepository],
})
export class ContentsModule {}
