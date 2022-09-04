import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SectionRepository } from './section.repository';
import { SectionController } from './section.controller';
import { SectionService } from './section.service';
import { Section } from './section.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Section])],
  controllers: [SectionController],
  providers: [SectionRepository, SectionService],
  exports: [SectionService],
})
export class SectionModule {}
