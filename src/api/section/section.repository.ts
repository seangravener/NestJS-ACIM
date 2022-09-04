import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AddSectionDto } from './dtos/add-section.dto';
import { Section } from './section.entity';

@Injectable()
export class SectionRepository {
  constructor(
    @InjectRepository(Section)
    private dataSource: Repository<Section>,
  ) {}

  async addSection(dto: AddSectionDto): Promise<Section> {
    const section = await this.dataSource.create({ ...dto });
    return await this.dataSource.save(section);
  }

  async addSections(dto: AddSectionDto[]): Promise<Section[]> {
    const section = await this.dataSource.create({ ...dto });
    return await this.dataSource.save(section);
  }
}
