import { Module } from '@nestjs/common';

import { APIModule } from './api/api.module';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
@Module({
  imports: [ConfigModule, DatabaseModule, APIModule],
})
export class AppModule {}
