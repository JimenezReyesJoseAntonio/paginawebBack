import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImageEntity } from './image.entity';

@Injectable()
export class ImageService {
    constructor(
        @InjectRepository(ImageEntity)
        private readonly imageRepository: Repository<ImageEntity>,
      ) {}
    


      async saveImage(path: string): Promise<ImageEntity> {
        const newImage = new ImageEntity();
        newImage.path = path;
        return await this.imageRepository.save(newImage);
      }

      async getImagePathById(id: number): Promise<string> {
        const image = await this.imageRepository.findOne({
            where: { id: id },
        });
        if (!image) {
            throw new Error('Image not found');
        }
        return image.path;
    }
    
      async updateImageById(id: number, newPath: string): Promise<ImageEntity> {
        const imageToUpdate = await this.imageRepository.findOne({
            where: { id: id }, // Especifica la condición de búsqueda
          });
        if (!imageToUpdate) {
          throw new Error('Image not found');
        }
        imageToUpdate.path = newPath;
        return await this.imageRepository.save(imageToUpdate);
      }
}
