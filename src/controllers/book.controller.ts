import { Response } from 'express';
import { Body, Delete, Get, JsonController, Param, Post, Put, Res } from 'routing-controllers';
import prisma from '../utils/prisma';
import { Prisma } from '@prisma/client';


@JsonController('/book')
export class BookController {
    @Post('/')
    async create(@Body() book: Prisma.BookCreateInput, @Res() res: Response): Promise<Response<any, Record<string, any>>> {
        const createdBook = await prisma.book.create({ data: book });
        return res.status(201).json(createdBook);
    }

    @Put('/:id')
    async update(@Body() book: Prisma.BookUpdateInput, @Param('id') id: string, @Res() res: Response): Promise<void> {
        const updatedBook = await prisma.book.update({ where: { id: id }, data: book });
        res.status(200).json(updatedBook);
    }

    @Get('/')
    async getAll(@Res() res: Response): Promise<void> {
        const book = await prisma.book.findMany({ include: { seller: true } });
        res.status(200).json(book);
    }

    @Get('/:id')
    async getById(@Param('id') id: string, @Res() res: Response): Promise<void> {
        const book = await prisma.book.findUniqueOrThrow({ where: { id: id } });
        res.status(200).json(book);
    }

    @Delete('/:id')
    async delete(@Param('id') id: string, @Res() res: Response): Promise<void> {
        await prisma.book.delete({ where: { id: id } });
        res.status(200).send();
    }
}
