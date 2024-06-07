import { Module } from '@nestjs/common';
import { InformacionService } from './informacion.service';
import { InformacionController } from './informacion.controller';
import { InformacionEmpresa } from './informacion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([InformacionEmpresa])],
  providers: [InformacionService],
  controllers: [InformacionController]
})
export class InformacionModule {}
