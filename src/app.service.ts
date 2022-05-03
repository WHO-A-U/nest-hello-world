import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'CI/CD test ';
  }

  getPing(): string {
    return 'Pong!';
  }
}
