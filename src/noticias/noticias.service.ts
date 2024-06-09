import { Injectable } from '@nestjs/common';
import { Noticia } from './noticias.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NoticiasService {

    constructor(
        @InjectRepository(Noticia)
        private publicationRepository: Repository<Noticia>,
      ) {}
    
      findAll(): Promise<Noticia[]> {
        return this.publicationRepository.find();
      }
    
      findOne(id: number): Promise<Noticia> {
        return this.publicationRepository.findOneBy({ id });
      }
    
      create(publication: Noticia): Promise<Noticia> {
        return this.publicationRepository.save(publication);
      }
    
      async update(id: number, updateData: Partial<Noticia>): Promise<Noticia> {
        await this.publicationRepository.update(id, updateData);
        return this.findOne(id);
      }
    
      async remove(id: number): Promise<void> {
        await this.publicationRepository.delete(id);
      }
}
