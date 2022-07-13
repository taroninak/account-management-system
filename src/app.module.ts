import { Module } from '@nestjs/common';

import { AppConfigModule } from './config/config.module';
import { HealthModule } from './health/health.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppConfigService } from './config/config.service';
import { PersonModule } from './person/person.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule],
      inject: [AppConfigService],
      useFactory: (appConfigService: AppConfigService) =>
        appConfigService.ormConfig as TypeOrmModuleOptions,
    }),
    AppConfigModule,
    HealthModule,
    PersonModule,
  ],
})
export class AppModule {}
