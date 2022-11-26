import { Body, CacheInterceptor, Controller, Get, Param, ParseIntPipe, Post, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';

@ApiTags('Brand')
@Controller('brands')
export class BrandController {
    constructor(private brandService: BrandService) { }

    @UseInterceptors(CacheInterceptor)
    @Get("")
    getAll() {
        return this.brandService.getAll();
    }

    @Get("/:brandId")
    getById(@Param("brandId", ParseIntPipe) brandId: number) {
        return this.brandService.getById(brandId);
    }

    @Post("")
    addBrand(@Body() brand: CreateBrandDto){
        return this.brandService.add(brand);
    }
}
