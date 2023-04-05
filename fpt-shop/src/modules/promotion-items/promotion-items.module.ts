import { Module } from '@nestjs/common';
import { PromotionItemsService } from './promotion-items.service';
import { PromotionItemsController } from './promotion-items.controller';

@Module({
  providers: [PromotionItemsService],
  controllers: [PromotionItemsController]
})
export class PromotionItemsModule {}
