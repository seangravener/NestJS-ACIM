import { Injectable } from '@nestjs/common';

import { SectionRepository } from './section.repository';
import { AddSectionDto } from './dtos/add-section.dto';
import { Section } from './section.entity';

@Injectable()
export class SectionService {
  constructor(private sectionRepository: SectionRepository) {}

  async addSection(dto: AddSectionDto): Promise<Section> {
    return this.sectionRepository.addSection(dto);
  }
}
