import { BaseEntity } from '@Bases/BaseEntity';
import { Column, Entity, PrimaryGeneratedColumn,
  BeforeInsert, BeforeUpdate, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import bcrypt from 'bcrypt';
import UserStats from '@UserStats/Entity/UserStats';
import Question from '@Question/Entity/Question';

@Entity('users')
export default class User extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
      id: number;

    @Column('text')
      email: string;

    @Column('text')
      name: string;

    @Column('text')
      password: string;

    @Column('text')
      avatar: string;

    @OneToOne(() => UserStats, (userStats) => userStats.user, {
      cascade: true,
    })
      stats: UserStats;

    @OneToMany(() => Question, (question) => question.user, {
      cascade: true,
    })
      questions: Question[];

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
      this.password = bcrypt.hashSync(this.password, 10);
    }
}
