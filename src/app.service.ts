import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! who-a-u!!!!3~~~!';
  }

  getPing(): string {
    return 'Pong!';
  }
}
