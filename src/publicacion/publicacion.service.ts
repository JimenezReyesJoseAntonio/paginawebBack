import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Publication } from './publicacion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PublicacionService {
    constructor(
        @InjectRepository(Publication)
        private publicationRepository: Repository<Publication>,
      ) {}
    
      findAll(): Promise<Publication[]> {
        return this.publicationRepository.find();
      }
    
      findOne(id: number): Promise<Publication> {
        return this.publicationRepository.findOneBy({ id });
      }
    
      create(publication: Publication): Promise<Publication> {
        return this.publicationRepository.save(publication);
      }
    
      async update(id: number, updateData: Partial<Publication>): Promise<Publication> {
        await this.publicationRepository.update(id, updateData);
        return this.findOne(id);
      }
    
      async remove(id: number): Promise<void> {
        await this.publicationRepository.delete(id);
      }
}
