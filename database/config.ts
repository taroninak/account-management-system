import { AppConfigService } from '../src/config/config.service';
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { config as dotenv } from 'dotenv';

export const { type, host, port, username, password, database, schema } =
  new AppConfigService(new ConfigService(dotenv())).ormConfig;

const dataSource = new DataSource({
  type,
  host,
  port,
  username,
  password,
  database,
  schema,
  migrations: ['database/migrations/*.ts'],
} as PostgresConnectionOptions);

export default dataSource;
