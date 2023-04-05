import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AttributeItemsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  nameAscii: string;

  @Column({ default: false })
  isShowNavFilter: boolean;

  @Column({ nullable: true })
  levelOrder: number | null;
}
