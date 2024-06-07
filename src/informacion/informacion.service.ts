import { Injectable } from '@nestjs/common';
import { InformacionEmpresa } from './informacion.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InformacionService {

    constructor(
        @InjectRepository(InformacionEmpresa)
        private informacionEmpresaRepository: Repository<InformacionEmpresa>,
      ) {}
    
      async create(infoEmpresa: Partial<InformacionEmpresa>): Promise<InformacionEmpresa> {
        const newInfoEmpresa = this.informacionEmpresaRepository.create(infoEmpresa);
        return this.informacionEmpresaRepository.save(newInfoEmpresa);
      }
    
      async findAll(): Promise<InformacionEmpresa[]> {
        return this.informacionEmpresaRepository.find();
      }
    
      async findOne(id: number): Promise<InformacionEmpresa> {
        return this.informacionEmpresaRepository.findOne({ where: { id } });
      }
    
      async update(id: number, updateData: Partial<InformacionEmpresa>): Promise<InformacionEmpresa> {
        await this.informacionEmpresaRepository.update(id, updateData);
        return this.findOne(id);
      }
    
      async remove(id: number): Promise<void> {
        await this.informacionEmpresaRepository.delete(id);
      }
    
}
