import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('')
export class APIController {
  constructor(private config: ConfigService) {}

  @Get()
  main() {
    return {
      name: this.config.get('app.name'),
      title: this.config.get('app.title'),
      description: this.config.get('app.description'),
      version: this.config.get('app.version'),
    };
  }
}

// @todo move collection logic to service
// @Post('/add/collection')
// async addCollection(
//   @Body() dtos: Collection<Chapter | Section>,
// ): Promise<Collection<Chapter | Section>> {
//   const results: Collection<Chapter | Section> = [];

//   for (const dto of dtos) {
//     if ('number' in dto && dto.number) {
//       results.push(await this.contentsService.addSection(dto));
//     } else {
//       let sections = [];
//       const { chapterId, title, page } = dto;
//       if ('sections' in dto) {
//         sections = dto.sections;
//       }

//       results.push(
//         await this.contentsService.addChapter({
//           chapterId,
//           title,
//           page,
//           sections,
//         }),
//       );
//     }
//   }

//   return results;
// }
