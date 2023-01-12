import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {BookModule} from "./books/book.module";
import { MongooseModule } from '@nestjs/mongoose';
import {ConfigModule} from '@nestjs/config'
import {UserModule} from "./users/user.module";

@Module({
  imports: [UserModule,BookModule, ConfigModule.forRoot(), MongooseModule.forRoot("mongodb://root:example@mongo:27017/")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
