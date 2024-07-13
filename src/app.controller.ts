import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
  @Get('/a')
  getRootRoute() {
    return 'hi there';
  }

  @Get('/bye')
  getByThere() {
    return 'get by there';
  }
}
