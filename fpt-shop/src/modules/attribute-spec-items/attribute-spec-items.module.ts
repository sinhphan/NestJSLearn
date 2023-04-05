import { Module } from '@nestjs/common';
import { AttributeSpecItemsController } from './attribute-spec-items.controller';
import { AttributeSpecItemsService } from './attribute-spec-items.service';

@Module({
  controllers: [AttributeSpecItemsController],
  providers: [AttributeSpecItemsService]
})
export class AttributeSpecItemsModule {}
