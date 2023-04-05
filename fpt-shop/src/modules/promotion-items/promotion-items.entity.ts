import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PromotionItemsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sku: string;

  @Column()
  promotionName: string;

  @Column()
  urlPicture: string;

  @Column()
  displayOrder: number;
}
