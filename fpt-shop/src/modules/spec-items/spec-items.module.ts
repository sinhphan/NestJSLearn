import { Module } from '@nestjs/common';
import { SpecItemsController } from './spec-items.controller';
import { SpecItemsService } from './spec-items.service';

@Module({
  controllers: [SpecItemsController],
  providers: [SpecItemsService]
})
export class SpecItemsModule {}
