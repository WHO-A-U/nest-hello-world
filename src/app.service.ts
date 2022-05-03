import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'getHello ';
  }

  getPing(): string {
    return 'Ping !!!! Pong !!!!';
  }
}
