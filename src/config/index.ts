import { ConfigModule as NestConfigModule } from '@nestjs/config';

export const ConfigModule = NestConfigModule.forRoot({
  envFilePath: `envs/${process.env.ENV}.env`,
});
