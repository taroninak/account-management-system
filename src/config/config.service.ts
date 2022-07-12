import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get host(): string {
    return this.configService.get('HOST', 'localhost');
  }

  get port(): number {
    return this.configService.get('PORT', 4000);
  }

  get ormConfig() {
    return {
      type: 'postgres',
      host: this.configService.get('DB_HOST', 'localhost'),
      port: this.configService.get('DB_PORT', 5432),
      username: this.configService.get('DB_USERNAME', 'postgres'),
      password: this.configService.get('DB_PASSWORD'),
      database: this.configService.get('DB_NAME'),
      schema: this.configService.get('DB_SCHEMA', 'public'),
      autoLoadEntities: true,
      ssl: false,
      synchronize: false,
      logging: true,
    };
  }
}
