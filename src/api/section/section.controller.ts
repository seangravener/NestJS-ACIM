import { Body, Controller, Post } from '@nestjs/common';
import { SectionService } from './section.service';
import { AddSectionDto } from './dtos/add-section.dto';
import { Section } from './section.entity';

@Controller('/section')
export class SectionController {
  constructor(private sectionService: SectionService) {}

  @Post('/add')
  async addSection(@Body() dto: AddSectionDto): Promise<Section> {
    return this.sectionService.addSection(dto);
  }
}
