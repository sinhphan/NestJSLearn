import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ProductsEntity } from '../products/products.entity';

@Entity()
export class ProductVariantEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productID: number;

  @Column()
  sku: string;

  @Column({ type: 'decimal', precision: 15, scale: 4 })
  price: number;

  @Column({ type: 'decimal', precision: 15, scale: 4 })
  priceMarket: number;

  @ManyToOne(
    () => ProductsEntity,
    (productsEntity) => productsEntity.productsVariant,
  )
  productsEntity: ProductsEntity;
}
