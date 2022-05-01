import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! who-a-u!!!';
  }

  getPing(): string {
    return 'Pong!';
  }
}
