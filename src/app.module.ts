import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ProductsModule} from './products/products.module';
import {MongooseModule} from "@nestjs/mongoose";
@Module({
    imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1', {dbName: 'test'}), ProductsModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
