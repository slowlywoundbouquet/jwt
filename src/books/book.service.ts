import {Injectable} from "@nestjs/common";

import { Model, Connection, HydratedDocument, QueryWithHelpers } from 'mongoose';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Book, BookDocument } from "../schemas/book.schema";
@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name) private BookModel: Model<BookDocument>,
        @InjectConnection() private connection: Connection,) {
    }


    create(data: Book) {
        const book = new this.BookModel(data)
        return book.save()
    }

    findAll(): Promise<BookDocument[]> {
        return this.BookModel.find().exec();
    }

    findOne(id: string): QueryWithHelpers<HydratedDocument<BookDocument, {}, {}> | null, HydratedDocument<BookDocument, {}, {}>, {}, BookDocument> {
        return this.BookModel.findOne({ _id: id })
    }

    update(id: string, data: Book): QueryWithHelpers<HydratedDocument<BookDocument, {}, {}> | null, HydratedDocument<BookDocument, {}, {}>, {}, BookDocument>  {
        return this.BookModel.findOneAndUpdate(
            { _id: id },
            data,
        );
    }

    delete(id: string): QueryWithHelpers<HydratedDocument<BookDocument, {}, {}> | null, HydratedDocument<BookDocument, {}, {}>, {}, BookDocument> {
        return this.BookModel.findOneAndRemove({ _id: id });
    }
}