import { Controller, Get } from '@nestjs/common';

@Controller()
export class SitesController {
  // Home page
  @Get()
  index(): string {
    return 'This is Home Page';
  }
}
