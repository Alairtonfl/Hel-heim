import { BaseEntity } from '@Bases/BaseEntity';
import {
  Column, Entity, PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user_stats')
export class UserStats extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
      id: string;

    @Column('int')
      user_id: number;

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
}
