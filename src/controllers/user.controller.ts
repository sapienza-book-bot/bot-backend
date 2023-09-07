import { Response } from 'express';
import { Delete, Get, JsonController, Post, Body, Res, Param } from 'routing-controllers';
import prisma from '../utils/prisma';
import { Prisma } from '@prisma/client';


@JsonController('/user')
export default class UserController {
  @Post('/')
  async create(@Body() user: Prisma.UserCreateInput, @Res() res: Response): Promise<void> {
    const createdUser = await prisma.user.create({ data: { telegramId: user.telegramId } });
    res.status(201).json(createdUser);
  }

  @Get('/')
  async getAll(@Res() res: Response): Promise<void> {
    const users = await prisma.user.findMany({ include: { books: true } });
    res.status(200).json(users);
  }

  @Get('/:id')
  async getById(@Param('id') id: string, @Res() res: Response): Promise<void> {
    const user = await prisma.user.findUniqueOrThrow({ where: { id: id }, include: { books: true } });
    res.status(200).json(user);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string, @Res() res: Response): Promise<void> {
    await prisma.user.delete({ where: { id: id } });
    res.status(200).send();
  }
}
