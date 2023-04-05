import { Module } from '@nestjs/common';
import { AttributeItemsController } from './attribute-items.controller';
import { AttributeItemsService } from './attribute-items.service';

@Module({
  controllers: [AttributeItemsController],
  providers: [AttributeItemsService]
})
export class AttributeItemsModule {}
