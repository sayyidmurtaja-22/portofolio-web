import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const frontendUrl = process.env.FRONTEND_URL;
  const envOrigins = frontendUrl
    ? frontendUrl.split(',').map((url) => url.trim())
    : [];

  const allowedOrigins = [
    'http://localhost:3000',
    'https://murtaja-portofolio.vercel.app',
    ...envOrigins,
  ];

  // Dynamic CORS configuration
  app.enableCors({
    origin: (origin, callback) => {
      if (!origin) {
        return callback(null, true);
      }

      const isAllowed =
        allowedOrigins.includes(origin) ||
        /\.vercel\.app$/.test(origin) ||
        origin === 'https://vercel.app';

      if (isAllowed) {
        return callback(null, true);
      }
      return callback(null, false);
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`Backend server is running on http://localhost:${port}`);
}
bootstrap();
