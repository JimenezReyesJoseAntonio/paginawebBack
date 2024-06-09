import { Module } from '@nestjs/common';
import { OrganigramaService } from './organigrama.service';
import { OrganigramaController } from './organigrama.controller';
import { Organigrama } from './organigrama.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Organigrama])],
  providers: [OrganigramaService],
  controllers: [OrganigramaController]
})
export class OrganigramaModule {}
