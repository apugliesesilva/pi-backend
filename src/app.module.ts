import { Module } from '@nestjs/common';
import { AppController } from './infra/http/controllers/app.controller';
import { AppService } from './app.service';
import { EnvModule } from './infra/env/env.module';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './infra/env/env';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    EnvModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
