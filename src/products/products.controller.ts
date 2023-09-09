import {Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Put, Query} from '@nestjs/common';
import {CreateProductDto} from "./dto/create-product.dto";
import {UpdateProductDto} from "./dto/update-product";
import {ProductserviceService} from "../productservice/productservice.service";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductserviceService) {
    }

    @Get()
    getAll(@Query('id') query) {
        return query ? this.productsService.getById(query) : this.productsService.getAll();
    }
    //
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    create(@Body() createProductDto: CreateProductDto) {
        return this.productsService.create(createProductDto)
    }
    //
    @Delete()
    remove(@Query('id') id: string) {
        return  this.productsService.remove(id)
    }

    //
    @Put()
    update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
        return `Updated ${updateProductDto} id: ${id}`
    }

}
