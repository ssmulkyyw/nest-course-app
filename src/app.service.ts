import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'We love NestJS';
  }
  getJson() {
    return {
      name: 'Irina',
      lastname: 'Gertye',
      age: 99,
    };
  }
  getGit() {
    return 'Git and GitHub using';
  }
}

