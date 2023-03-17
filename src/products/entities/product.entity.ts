import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn()
  @Field((type) => Int, { nullable: false })
  id: number;

  @Column({ nullable: true, length: 200 })
  @Field({ nullable: true })
  nama_barang: string;

  @Column({ nullable: false, length: 50 })
  @Field({ nullable: false })
  kode_barang: string;

  @Column({ nullable: false })
  @Field((type) => Int, { nullable: false })
  jumlah_barang: number;

  @CreateDateColumn({ nullable: false })
  @Field()
  created_at: Date;

  @UpdateDateColumn({ nullable: false })
  @Field()
  updated_at: Date;
}
