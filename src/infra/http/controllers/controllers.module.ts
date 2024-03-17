import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  providers: [AppController],
  exports: [AppController],
})
export class ControllersModule {}
