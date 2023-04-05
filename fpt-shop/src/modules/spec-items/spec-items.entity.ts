import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductsEntity } from '../products/products.entity';

@Entity()
export class SpecItemsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  attributeID: number;

  @Column()
  attributeCustomID: number;

  @Column()
  name: string;

  @Column()
  nameAscii: string;

  @Column()
  displayOrder: number;

  @Column()
  attrCusGroupName: string;

  @Column()
  attrCusGroupNameAscii: string;
}
