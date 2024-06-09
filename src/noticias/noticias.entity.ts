import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Noticia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  fullText: string;

}
