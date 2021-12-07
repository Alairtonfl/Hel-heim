import { BaseEntity } from "@Bases/BaseEntity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id: string;
    @Column()
    email: string;
    @Column()
    name: string;
    @Column()
    password: string;
    @Column()
    avatar: string;
}