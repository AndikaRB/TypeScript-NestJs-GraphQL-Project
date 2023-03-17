import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@InputType()
export class GetProductsInput {
  @IsNumber()
  @Field({ nullable: true })
  page: number;

  @IsNumber()
  @Field({ nullable: true })
  limit: number;
}
