import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ServiciosService } from './servicios.service';
import { Servicio } from './servicios.entity';

@Controller('servicios')
export class ServiciosController {

    constructor(private readonly publicationService: ServiciosService) {}

  @Get()
  findAll(): Promise<Servicio[]> {
    return this.publicationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Servicio> {
    return this.publicationService.findOne(id);
  }

  @Post()
  create(@Body() publication: Servicio): Promise<Servicio> {
    return this.publicationService.create(publication);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateData: Partial<Servicio>): Promise<Servicio> {
    return this.publicationService.update(id, updateData);
  }

}
