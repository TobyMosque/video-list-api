import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoModule } from 'src/modules/video/video.module';
import { ConfigModule } from 'src/config';

@Module({
  imports: [VideoModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
