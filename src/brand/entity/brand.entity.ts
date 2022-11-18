import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Brands")
export class Brand {

    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    Name: string
}