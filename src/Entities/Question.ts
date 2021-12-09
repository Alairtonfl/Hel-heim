import { BaseEntity } from '@Bases/BaseEntity';
import {
  Column, ManyToOne, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import Answer from './Answer';
import User from './User';

export default class Question extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
      id: number;

    @Column('text')
      question: string;

    @Column('int')
      userId: number;

    @ManyToOne(() => User, (user) => user.questions)
      user: User;

    @OneToMany(() => Answer, (answer) => answer.question, {
      cascade: true,
    })
      answers: Answer[];
}
