import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from './entity/brand.entity';

@Injectable()
export class BrandService {
    constructor(
        @InjectRepository(Brand)
        private brandRepository: Repository<Brand>
    ) { }

    getAll(): Promise<Brand[]> {
        return this.brandRepository.find();
    }

    getById(brandId: number): Promise<Brand> {
        return this.brandRepository.findOne({ where: { Id: brandId } });
    }
}
