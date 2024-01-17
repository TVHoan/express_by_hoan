import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, Unique} from 'typeorm';

@Entity()
@Unique(["name"])
export class Permission extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
