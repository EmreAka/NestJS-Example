import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandController } from './brand.controller';
import { BrandService } from './brand.service';
import { Brand } from './entity/brand.entity';

@Module({
  controllers: [BrandController],
  providers: [BrandService],
  imports: [
    TypeOrmModule.forFeature([Brand]),
    CacheModule.register({
      ttl: 10000,
      max: 100
    })
  ],
})
export class BrandModule { }
