import { Module } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { ProductsResolver } from './resolvers/products.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductsService, ProductsResolver],
})
export class ProductsModule {}
