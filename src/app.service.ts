import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'getHello deploy test';
  }

  getPing(): string {
    return 'Ping !!!! Pong !!!!';
  }
}
