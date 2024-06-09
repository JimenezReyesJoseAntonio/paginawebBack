import { Injectable } from '@nestjs/common';
import { Organigrama } from './organigrama.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrganigramaService {
    constructor(
        @InjectRepository(Organigrama)
        private publicationRepository: Repository<Organigrama>,
      ) {}
    
      findAll(): Promise<Organigrama[]> {
        return this.publicationRepository.find();
      }
    
      findOne(id: number): Promise<Organigrama> {
        return this.publicationRepository.findOneBy({ id });
      }
    
      create(publication: Organigrama): Promise<Organigrama> {
        return this.publicationRepository.save(publication);
      }
    
      async update(id: number, updateData: Partial<Organigrama>): Promise<Organigrama> {
        await this.publicationRepository.update(id, updateData);
        return this.findOne(id);
      }
    
      async remove(id: number): Promise<void> {
        await this.publicationRepository.delete(id);
      }
}
