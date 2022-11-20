import { CacheInterceptor, Controller, Get, Param, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BrandService } from './brand.service';

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
}
