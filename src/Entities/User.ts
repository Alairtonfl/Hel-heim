import { BaseEntity } from '@Bases/BaseEntity';
import {
  Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate,
} from 'typeorm';
import bcrypt from 'bcrypt';

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
      id: string;

    @Column('text')
      email: string;

    @Column('text')
      name: string;

    @Column('text')
      password: string;

    @Column('text')
      avatar: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
      this.password = bcrypt.hashSync(this.password, 10);
    }
}
