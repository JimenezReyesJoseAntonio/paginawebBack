import { Body, Controller, Param, Post, Put, Get } from '@nestjs/common';
import { PublicacionService } from './publicacion.service';
import { Publication } from './publicacion.entity';

@Controller('publicacion')
export class PublicacionController {

    constructor(private readonly publicationService: PublicacionService) {}

  @Get()
  findAll(): Promise<Publication[]> {
    return this.publicationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Publication> {
    return this.publicationService.findOne(id);
  }

  @Post()
  create(@Body() publication: Publication): Promise<Publication> {
    return this.publicationService.create(publication);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateData: Partial<Publication>): Promise<Publication> {
    return this.publicationService.update(id, updateData);
  }
}
