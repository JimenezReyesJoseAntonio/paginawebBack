import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { NoticiasService } from './noticias.service';
import { Noticia } from './noticias.entity';

@Controller('noticias')
export class NoticiasController {
    constructor(private readonly publicationService: NoticiasService) {}

  @Get()
  findAll(): Promise<Noticia[]> {
    return this.publicationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Noticia> {
    return this.publicationService.findOne(id);
  }

  @Post()
  create(@Body() publication: Noticia): Promise<Noticia> {
    return this.publicationService.create(publication);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateData: Partial<Noticia>): Promise<Noticia> {
    return this.publicationService.update(id, updateData);
  }
}
