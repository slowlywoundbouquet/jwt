import {Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe} from "@nestjs/common";
import {BookService} from "./book.service";
import {Book} from "../interfaces/book.interface";
import {BookDocument} from "../schemas/book.schema";
import {HydratedDocument, QueryWithHelpers} from "mongoose";
import {IParamId} from "../interfaces/param-id";
import {LoggingInterceptor} from "../app.logging.interceptor";
import {bookCreateSchema} from "../validation/schemas/register.schema";

@Controller('books')
export class BookController {
    constructor(private readonly bookService: BookService) {
    }
@UsePipes(new ValidationPipe(bookCreateSchema))
    @Post()
    public create(@Body() book: Book):Promise<BookDocument> {
        return this.bookService.create(book);
    }

    @Put(":id")
    public update(
        @Param() {id}: IParamId,
        @Body() book: Book): QueryWithHelpers<HydratedDocument<BookDocument, {}, {}> | null, HydratedDocument<BookDocument, {}, {}>, {}, BookDocument> {
        return this.bookService.update(id, book) ;
    }

    @Get()
    public findAll(): Promise<BookDocument[]> {
        return this.bookService.findAll();
    }

    @Get(":id")
    public findOne(@Param() {id}: IParamId): QueryWithHelpers<HydratedDocument<BookDocument, {}, {}> | null, HydratedDocument<BookDocument, {}, {}>, {}, BookDocument> {
        return this.bookService.findOne(id);
    }

    @Delete(":id")
    public delete(@Param() {id}: IParamId): QueryWithHelpers<HydratedDocument<BookDocument, {}, {}> | null, HydratedDocument<BookDocument, {}, {}>, {}, BookDocument> {
        return this.bookService.delete(id)
    }
}