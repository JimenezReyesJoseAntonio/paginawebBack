import { Injectable } from '@nestjs/common';
import { Servicio } from './servicios.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ServiciosService {

    constructor(
        @InjectRepository(Servicio)
        private publicationRepository: Repository<Servicio>,
      ) {}
    
      findAll(): Promise<Servicio[]> {
        return this.publicationRepository.find();
      }
    
      findOne(id: number): Promise<Servicio> {
        return this.publicationRepository.findOneBy({ id });
      }
    
      create(publication: Servicio): Promise<Servicio> {
        return this.publicationRepository.save(publication);
      }
    
      async update(id: number, updateData: Partial<Servicio>): Promise<Servicio> {
        await this.publicationRepository.update(id, updateData);
        return this.findOne(id);
      }
    
      async remove(id: number): Promise<void> {
        await this.publicationRepository.delete(id);
      }
}
