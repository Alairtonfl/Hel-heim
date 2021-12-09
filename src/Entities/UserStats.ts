import { BaseEntity } from '@Bases/BaseEntity';
import {
  Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn,
} from 'typeorm';
import User from './User';

@Entity('user_stats')
export class UserStats extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
      id: number;

    @Column('int')
      userId: number;

    @Column('int')
      matchs: number;

    @Column('int')
      answer_questions: number;

    @Column('float')
      prizee: number;

    @Column('int')
      defeats: number;

    @Column('int')
      wins: number;

    @OneToOne(() => User, (user) => user.stats)
    @JoinColumn()
      user : User;
}
