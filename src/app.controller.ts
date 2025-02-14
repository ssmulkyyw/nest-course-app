import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // localhost:3000
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/showjson') //localhost:3000/showjson
  getJson() {
    return this.appService.getJson();
  }
  
  @Get('/showGit') //localhost:3000/showGit
  getGit() {
    return this.appService.getGit();
  }
}
