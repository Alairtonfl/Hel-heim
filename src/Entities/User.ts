import { BaseEntity } from '@Bases/BaseEntity';
import {
  Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, OneToOne, JoinColumn,
} from 'typeorm';
import bcrypt from 'bcrypt';
import { UserStats } from './UserStats';

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

    @OneToOne(() => UserStats)
    @JoinColumn()
      stats: UserStats;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
      this.password = bcrypt.hashSync(this.password, 10);
    }
}
