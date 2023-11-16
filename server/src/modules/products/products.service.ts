import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private readonly repo: Repository<Product>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    const product = this.repo.create(createProductDto);
    return await this.repo.save(product);
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: number) {
    const product = await this.repo.findOneBy({ id });
    if (!product) throw new NotFoundException(`Product by id ${id} not found.`);
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.repo.findOneBy({ id });
    if (!product) throw new NotFoundException(`Product by id ${id} not found.`);
    Object.assign(product, updateProductDto);
    return await this.repo.save(product);
  }

  async remove(id: number) {
    const product = await this.repo.findOneBy({ id });
    if (!product) throw new NotFoundException(`Product by id ${id} not found.`);
    return await this.repo.remove(product);
  }
}
