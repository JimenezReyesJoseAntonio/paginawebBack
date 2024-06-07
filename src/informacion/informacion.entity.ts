import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name:'informacion'})
export class InformacionEmpresa {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    about: string;

    @Column('text')
    vision: string;


    @Column('text')
    mision: string;

}
