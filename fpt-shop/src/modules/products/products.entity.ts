import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductVariantEntity } from '../product-variant/product-variant.entity';

@Entity()
export class ProductsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brandName: string;

  @Column()
  name: string;

  @Column()
  nameAscii: string;

  @Column()
  urlPicture: string;

  @Column()
  labelInst: string;

  @Column()
  labelFlashSale: string;

  @OneToMany(
    () => ProductVariantEntity,
    (productVariantEntity) => productVariantEntity.productsEntity,
  )
  productsVariant: ProductVariantEntity;
}
