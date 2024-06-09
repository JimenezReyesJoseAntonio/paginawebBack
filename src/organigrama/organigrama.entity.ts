import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Organigrama {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  puesto: string;

}
