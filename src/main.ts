import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvService } from './infra/env/env.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = app.get(EnvService).get('PORT');

  await app.listen(port, '0.0.0.0');
}
bootstrap();
