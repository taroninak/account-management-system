import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config/config.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

function setupSwagger(app) {
  const config = new DocumentBuilder()
    .addBearerAuth({
      type: 'http',
      description: 'Authorize',
    })
    .setTitle('Account Management System API')
    .setVersion('0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig = app.get(AppConfigService);

  setupSwagger(app);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  await app.listen(appConfig.port, appConfig.host);

  const appUrl = `http://${appConfig.host}:${appConfig.port}`;
  console.log(
    `🚀 Application is running at ${appUrl} \n📝 Check docs at ${appUrl}/docs`,
  );
}

bootstrap().catch((e) => {
  console.error('Application crushed with error:', e);
  process.exit(1);
});
