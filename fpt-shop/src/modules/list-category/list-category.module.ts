import { Module } from '@nestjs/common';
import { ListCategoryController } from './list-category.controller';
import { ListCategoryService } from './list-category.service';

@Module({
  controllers: [ListCategoryController],
  providers: [ListCategoryService]
})
export class ListCategoryModule {}
