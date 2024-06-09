import { Module } from '@nestjs/common';
import { NoticiasService } from './noticias.service';
import { NoticiasController } from './noticias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Noticia } from './noticias.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Noticia])],
  providers: [NoticiasService],
  controllers: [NoticiasController]
})
export class NoticiasModule {}
