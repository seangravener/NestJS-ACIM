import { Controller, Get } from '@nestjs/common';

@Controller('contents')
export class ContentsController {
  @Get()
  getContents() {
    return { contents: [1, 2, 3] };
  }
}
