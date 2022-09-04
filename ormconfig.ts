import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { join } from 'path';

const path = (path: string) => join(__dirname, ...path.split('/'));
const entities = [path('**/*.entity.{ts,js}')];
const migrations = [path('src/database/migrations/**/*.migration.{ts,js}')];

const postgres: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities,
};

const sqlite: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'db/sqlite.db',
  entities,
  migrations,
};

const syncForDevelopment = {
  synchronize: true, // Development only
};

export const LOCAL_SqliteConfig = { ...sqlite, ...syncForDevelopment };
export const LOCAL_PostgresConfig = { ...postgres, ...syncForDevelopment };
