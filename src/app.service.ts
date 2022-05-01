import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! who-a-u!!!!2';
  }

  getPing(): string {
    return 'Pong!';
  }
}
