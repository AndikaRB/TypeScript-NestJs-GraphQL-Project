import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field({ nullable: false })
  nama_barang: string;

  @Field({ nullable: false })
  kode_barang: string;

  @Field((type) => Int, { nullable: false })
  jumlah_barang: number;
}
