import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity} from "typeorm"
import {Product} from "./ProductEntity";
import {Order} from "./OrderEntity";

@Entity()
export class Orderline extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column()
    quantity:number;

    @Column('decimal', { precision: 10, scale: 5 })
    totalprice:number;

    @ManyToOne(()=>Product)
    product:Product;

    @ManyToOne(()=>Order,(order)=>order.orderline)
    Order:Order;



}