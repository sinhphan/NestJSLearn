import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './modules/products/products.module';
import { ProductVariantModule } from './modules/product-variant/product-variant.module';
import { ListCategoryModule } from './modules/list-category/list-category.module';
import { AttributeItemsModule } from './modules/attribute-items/attribute-items.module';
import { SpecItemsModule } from './modules/spec-items/spec-items.module';
import { AttributeSpecItemsModule } from './modules/attribute-spec-items/attribute-spec-items.module';
import { PromotionItemsModule } from './modules/promotion-items/promotion-items.module';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'sinh',
      password: 'SinhLAa3@',
      database: 'fpt_shop',
      entities: [join(__dirname, './modules/**/*.entity{.ts,.js}')],
      migrations: [join(__dirname, './migration/*{.ts,.js}')],
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductsModule,
    ProductVariantModule,
    ListCategoryModule,
    AttributeItemsModule,
    SpecItemsModule,
    AttributeSpecItemsModule,
    PromotionItemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
