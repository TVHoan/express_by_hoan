import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinTable, ManyToMany} from 'typeorm';
import {Permission} from "./PermissionEntity";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @ManyToMany(() => Permission)
    @JoinTable()
    permissions: Permission[];

}