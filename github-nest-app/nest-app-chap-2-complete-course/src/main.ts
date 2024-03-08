import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  //Nest Factory = to create nest application
  //App Module = is a root module for app, containing all small modules (brought together in our app module) we get our complete nest app
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true, // set true (then you can't return additional value that isn't in dto)
      forbidNonWhitelisted: true, // set true (then you can't return additional value that isn't in dto)
                                  // as well as (you'll get an ERROR msg --that you've added additional value)
      transform: true, // auto transform payloads to dto instances
                       // set true (then whatever types that you've defined in dto,
                       // --then by default you'll get that "type" of (id or body) as response)
    }
  ));
  await app.listen(3000);
}
bootstrap();
