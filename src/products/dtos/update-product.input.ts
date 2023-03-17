import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateProductInput {
  @Field({ nullable: true })
  @IsNotEmpty()
  nama_barang?: string;

  @IsNotEmpty()
  @Field({ nullable: true })
  kode_barang?: string;

  @IsNotEmpty()
  @Field((type) => Int, { nullable: true })
  jumlah_barang?: number;
}
