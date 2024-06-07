import { Body, Controller, Get, Param, Post, Put,Delete } from '@nestjs/common';
import { InformacionService } from './informacion.service';
import { InformacionEmpresa } from './informacion.entity';

@Controller('informacion')
export class InformacionController {

    constructor(private readonly infoEmpresaService: InformacionService) {}

  @Post()
  create(@Body() infoEmpresa: Partial<InformacionEmpresa>): Promise<InformacionEmpresa> {
    return this.infoEmpresaService.create(infoEmpresa);
  }

  @Get()
  findAll(): Promise<InformacionEmpresa[]> {
    return this.infoEmpresaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<InformacionEmpresa> {
    return this.infoEmpresaService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<InformacionEmpresa>): Promise<InformacionEmpresa> {
    return this.infoEmpresaService.update(+id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.infoEmpresaService.remove(+id);
  }
}
