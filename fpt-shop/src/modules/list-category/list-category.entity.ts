import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ListCategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  seoTitle: string;

  @Column({ type: 'varchar', length: 1000 })
  metaDescription: string;

  @Column({ type: 'varchar', length: 255 })
  metaKeyword: string;

  @Column()
  nameAscii: string;

  @Column()
  parentID: number;

  @Column()
  order: number;

  @Column()
  imageCateUrl: string;

  @Column()
  shareImageUrl: string;

  @Column({ default: false })
  isShowInTab: boolean;

  @Column({ default: false })
  isShowInNavFilter: boolean;
}
