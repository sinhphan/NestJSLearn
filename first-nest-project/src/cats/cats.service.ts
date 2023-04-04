import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cat: Cat[] = [];

  // add a cat to database
  create(cat: Cat) {
    this.cat.push(cat);
  }

  // get all cat in database
  findAll(): Cat[] {
    return this.cat;
  }
}
