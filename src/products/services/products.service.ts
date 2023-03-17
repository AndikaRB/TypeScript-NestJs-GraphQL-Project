import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductInput } from '../dtos/create-product.input';
import { UpdateProductInput } from '../dtos/update-product.input';
import { GetProductsInput } from '../dtos/get-products.input';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepository: Repository<Product>,
  ) {}

  async findAll(getProductInput: GetProductsInput): Promise<Product[]> {
    const { limit = 10, page = 1 } = getProductInput;
    const offset = (page - 1) * limit;
    return this.productsRepository.find({ take: limit, skip: offset });
  }

  findOne(id: number): Promise<Product> {
    return this.productsRepository.findOneByOrFail({ id });
  }

  createProduct(createProductInput: CreateProductInput): Promise<Product> {
    const newProduct = this.productsRepository.create(createProductInput);

    return this.productsRepository.save(newProduct);
  }

  async updateProduct(
    id: number,
    updateProductInput: UpdateProductInput,
  ): Promise<Product> {
    await this.productsRepository.update(id, updateProductInput);

    return this.findOne(id);
  }

  async remove(id: number) {
    const product = await this.findOne(id);
    return this.productsRepository.remove(product);
  }
}
