import {Injectable} from '@nestjs/common';
import {CreateProductDto} from "../products/dto/create-product.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose"
import {ProductDocument, Products} from "../products/schemas/products.schema";
import {UpdateProductDto} from "../products/dto/update-product";

@Injectable()
export class ProductserviceService {
    constructor(@InjectModel(Products.name) private productModel: Model<ProductDocument>) {
    }

    private products = [];

    async getAll(): Promise <Products[]> {
        return this.productModel.find().exec()
    }

    async getById(id: string): Promise <Products[]> {
        return this.productModel.findById(id)
    }
    async create(productDto: CreateProductDto) {
     const newProduct = new this.productModel(productDto);
     return newProduct.save()
    }
    //
    async remove(id: string) {
        return this.productModel.findByIdAndDelete(id)
    }
    //
    async update(id: string, productDto: UpdateProductDto) {
        return this.productModel.findByIdAndUpdate(id, productDto, {new: true})
    }
}
