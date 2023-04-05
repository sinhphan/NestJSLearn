import { Module } from '@nestjs/common';
import { ProductVariantController } from './product-variant.controller';
import { ProductVariantService } from './product-variant.service';

@Module({
  controllers: [ProductVariantController],
  providers: [ProductVariantService]
})
export class ProductVariantModule {}
