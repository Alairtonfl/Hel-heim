import { BaseEntity } from '@Bases/BaseEntity';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Question from './Question';

export default class Answer extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
      id: number;

    @Column('text')
      answer: string;

    @Column('int')
      questionId: number;

    @ManyToOne(() => Question, (question) => question.answers)
      question: Question;
}
