import { Module } from '@nestjs/common';
import { ContentsController } from './contents.controller';

@Module({
  imports: [],
  controllers: [ContentsController],
})
export class ContentsModule {}
