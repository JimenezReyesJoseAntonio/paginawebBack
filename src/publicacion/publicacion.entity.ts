import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Publication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  shortText: string;

  @Column('text')
  fullText: string;

}
