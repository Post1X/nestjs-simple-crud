import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose"

export type ProductDocument = Products & Document;
// @ts-ignore
@Schema()
export class Products {
    @Prop()
    title: string

    @Prop()
    price: number
}

export const ProductSchema = SchemaFactory.createForClass(Products);
