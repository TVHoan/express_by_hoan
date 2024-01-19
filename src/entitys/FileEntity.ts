import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class File extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    source:string;

    @Column()
    destination:string;

    @Column()
    ispublic:boolean;

    @Column("simple-array")
    users: number[]
}