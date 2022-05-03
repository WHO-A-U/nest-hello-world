import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'CI/CD test 222';
  }

  getPing(): string {
    return 'Pong!';
  }
}
