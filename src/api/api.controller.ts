import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('')
export class APIController {
  constructor(private config: ConfigService) {}

  @Get()
  main() {
    return {
      title: this.config.get('app.title'),
      description: this.config.get('app.description'),
      name: this.config.get('app.name'),
      version: this.config.get('app.version'),
    };
  }
}
