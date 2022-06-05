import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const cors = require('cors');
  const whitelist = [
    'http://localhost:3000',
    '127.0.0.1',
    'localhost',
    'localhost:8081',
  ];
  const corsOptions = {
    credentials: true, // This is important.
    origin: (origin, callback) => {
      return callback(null, true);
      if (whitelist.includes(origin))
        callback(
          new Error('Not allowed by CORS'),
        );
    },
  };

  app.use(cors(corsOptions));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
