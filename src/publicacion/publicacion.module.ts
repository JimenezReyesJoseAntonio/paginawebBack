import { Module } from '@nestjs/common';
import { PublicacionController } from './publicacion.controller';
import { PublicacionService } from './publicacion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publication } from './publicacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Publication])],
  controllers: [PublicacionController],
  providers: [PublicacionService]
})
export class PublicacionModule {}
