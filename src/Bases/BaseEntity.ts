import { Column, Entity } from "typeorm";
@Entity('users')
export class BaseEntity {
    @Column('date')
    created_at: Date;
    @Column('date')
    updated_at: Date;
    @Column('date')
    deleted_at: Date;
}