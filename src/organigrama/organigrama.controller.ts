import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { OrganigramaService } from './organigrama.service';
import { Organigrama } from './organigrama.entity';

@Controller('organigrama')
export class OrganigramaController {
    constructor(private readonly organigramaService: OrganigramaService) {}

    @Get()
    findAll(): Promise<Organigrama[]> {
      return this.organigramaService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Organigrama> {
      return this.organigramaService.findOne(id);
    }
  
    @Post()
    create(@Body() publication: Organigrama): Promise<Organigrama> {
      return this.organigramaService.create(publication);
    }
  
    @Put(':id')
    update(@Param('id') id: number, @Body() updateData: Partial<Organigrama>): Promise<Organigrama> {
      return this.organigramaService.update(id, updateData);
    }
}
