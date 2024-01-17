import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity} from "typeorm"
import {Category} from "./CategoryEntity";

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;
    @Column()
    image:string;

    @Column('decimal', { precision: 10, scale: 5 })
    price: number;

    @Column()
    quantity: number;

    @ManyToOne(()=>Category,(category)=>category.products)
    category: Category;

    @Column()
    manufacturer: string;
}
