import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BrandService } from './brand.service';

@Controller('brands')
export class BrandController {
    constructor(private brandService: BrandService) { }

    @Get("")
    getAll() {
        return this.brandService.getAll();
    }

    @Get("/:brandId")
    getById(@Param("brandId", ParseIntPipe) brandId: number) {
        return this.brandService.getById(brandId);
    }
}
