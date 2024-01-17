import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from "typeorm"
import {Product} from "./ProductEntity";

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @OneToMany(()=>Product,(products)=>products.category)
    products: Product[]
}