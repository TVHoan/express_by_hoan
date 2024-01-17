import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from "typeorm"
import {Orderline} from "./OrderlineEntity";

@Entity()
export class Order  extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column()
    address:string;

    @OneToMany(() => Orderline, (orderline) => orderline.Order)
    orderline : Orderline[]

    @Column()
    quantity:number;

    @Column('decimal', { precision: 10, scale: 5 })
    totalprice:number;
}