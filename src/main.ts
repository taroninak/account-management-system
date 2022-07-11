import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig = app.get(AppConfigService);
  await app.listen(appConfig.port, appConfig.host);

  console.log(
    `🚀🚀🚀 Magic happens at http://${appConfig.host}:${appConfig.port}`,
  );
}

bootstrap().catch((e) => {
  console.error('Application crushed with error:', e);
  process.exit(1);
});
