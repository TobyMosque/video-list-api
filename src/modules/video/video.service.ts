import { Injectable } from '@nestjs/common';
import { readdir } from 'fs/promises';
import { join, extname } from 'path';
import { promisify } from 'util';
import * as ffmpeg from 'fluent-ffmpeg';
import { Video } from './entities/video.entity';
import { randomUUID } from 'crypto';

const ffprobe = promisify(ffmpeg.ffprobe);

@Injectable()
export class VideoService {
  async list() {
    const dir = process.env.VIDEO_DIRECTORY;
    const files = await readdir(process.env.VIDEO_DIRECTORY);

    const videos: Video[] = [];
    for (const name of files) {
      const file = join(dir, name);
      let probe: ffmpeg.FfprobeData;
      try {
        probe = (await ffprobe(file)) as ffmpeg.FfprobeData;
      } catch {
        continue;
      }

      const stream = probe.streams.find(
        (stream) => stream.codec_type === 'video',
      );
      if (!stream) {
        continue;
      }

      const video = new Video();
      video.codec = stream.codec_name;
      video.duration = parseFloat(stream.duration || '0');
      video.width = stream.width;
      video.height = stream.height;
      video.ratio = stream.display_aspect_ratio;

      const title = probe.format.tags?.title;
      video.name = title && typeof title === 'string' ? title : name;
      video.ext = extname(file);
      videos.push(video);
    }
    return videos;
  }
}
