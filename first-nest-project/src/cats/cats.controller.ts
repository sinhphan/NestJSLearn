import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Query,
  Redirect,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';

import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats') //! this controller run in cats path.
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  create(
    @Body() createCatdto: CreateCatDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    this.catsService.create(createCatdto);
    res.status(HttpStatus.CREATED);
    return 'This action add new cat to database';
  }

  // return all cats in database
  @Get()
  async findAll(@Res({ passthrough: true }) res: Response): Promise<Cat[]> {
    res.status(HttpStatus.OK);
    return this.catsService.findAll();
  }

  @Get(':id') // get a path as a param to user, example id, name ASCII
  findOne(@Param() params): string {
    // throw new NotFoundException();
    return `This action return the #${params.id} cat`;
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}
