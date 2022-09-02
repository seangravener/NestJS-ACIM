import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Section } from '../entities/section.entity';
import { AddSectionDto } from '../dtos/add-section.dto';

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
