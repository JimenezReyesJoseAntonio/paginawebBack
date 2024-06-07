import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:'images'})
export class ImageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  path: string;
}