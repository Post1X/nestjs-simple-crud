import {Module} from '@nestjs/common';
import {ProductserviceService} from "../productservice/productservice.service";
import {ProductsController} from "./products.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {Products, ProductSchema} from "./schemas/products.schema";

@Module({
    imports: [MongooseModule.forFeature([
        {name: Products.name, schema: ProductSchema}
    ])],
    providers: [ProductserviceService],
    controllers: [ProductsController]
})
export class ProductsModule {
}
