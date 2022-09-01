import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentsModule } from './contents/contents.module';
import { Chapter } from './contents/entities/chapter.entity';
import { Section } from './contents/entities/section.entity';

// const postgres = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: 'postgres',
//   database: 'postgres',
//   autoLoadEntities: true,
//   entities: [Chapter, Section],

//   // Development only
//   synchronize: true,
// };

const sqlite = {
  type: 'sqlite',
  database: 'db/sqlite.db',
  autoLoadEntities: true,
  entities: [Chapter, Section],

  // Development only
  synchronize: true,
} as TypeOrmModuleOptions;

@Module({
  imports: [ContentsModule, TypeOrmModule.forRoot(sqlite)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
