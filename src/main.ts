import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  //Se crea la app de nest
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
