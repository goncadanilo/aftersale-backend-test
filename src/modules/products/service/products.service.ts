import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoreProductDto } from '../dtos/store-product.dto';
import { Products } from '../entity/products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products) private repository: Repository<Products>,
  ) {}

  async add(data: StoreProductDto) {
    const { id, title } = await this.repository.save(data);

    return { id, title };
  }
}