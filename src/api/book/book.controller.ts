import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseIntPipe,
  UsePipes,
  ValidationPipe
} from '@nestjs/common'
import { BookService } from './book.service'
import { NewBooksDto } from '../../dtos'

@Controller('api/books')
export class BookController {
  constructor(private readonly booksService: BookService) {}
  @Get()
  getBooks(): object {
    return this.booksService.getBooks()
  }

  @Get('/:id')
  getBookById(@Param('id', ParseIntPipe) id: number) {
    return this.booksService.getBookById(id)
  }

  @Post()
  @UsePipes(ValidationPipe)
  newBook(@Body() newBooksDto: NewBooksDto) {
    return this.booksService.addNewBooks(newBooksDto)
  }
}