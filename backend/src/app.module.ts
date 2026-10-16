import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [ContactModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
