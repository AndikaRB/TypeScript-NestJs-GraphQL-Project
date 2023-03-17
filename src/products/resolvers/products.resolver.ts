import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreateProductInput } from '../dtos/create-product.input';
import { GetProductsInput } from '../dtos/get-products.input';
import { UpdateProductInput } from '../dtos/update-product.input';
import { Product } from '../entities/product.entity';
import { ProductsService } from '../services/products.service';

@Resolver((of) => Product)
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query((returns) => [Product])
  getAllProducts(
    @Args('pagination') getProductInput: GetProductsInput,
  ): Promise<Product[]> {
    return this.productsService.findAll(getProductInput);
  }

  @Query((returns) => Product)
  getProductById(@Args('id', { type: () => Int }) id: number): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Mutation((returns) => Product)
  createNewProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ): Promise<Product> {
    return this.productsService.createProduct(createProductInput);
  }

  @Mutation((returns) => Product)
  updateProductById(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ): Promise<Product> {
    return this.productsService.updateProduct(id, updateProductInput);
  }

  @Mutation((returns) => Product)
  deleteProductById(@Args('id', { type: () => Int }) id: number) {
    return this.productsService.remove(id);
  }
}
