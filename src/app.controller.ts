import {Controller, Get, HttpException, UseFilters, UseInterceptors, UsePipes} from '@nestjs/common';
import { AppService } from './app.service';
import {LoggingInterceptor} from "./app.logging.interceptor";
import {HttpExceptionFilter} from "./http.exception.filter";

@UseFilters(HttpExceptionFilter)
@UsePipes(LoggingInterceptor)
@UseInterceptors(LoggingInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    throw new HttpException('Opps', 401)
    return this.appService.getHello();
  }
}
