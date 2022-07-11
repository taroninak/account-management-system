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
}
