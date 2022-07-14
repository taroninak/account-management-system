import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PersonEntity } from '../person/person.entity';
import { TransformFloat } from '../common/utils/transformer';

export enum AccountType {
  Checking,
  Savings,
}

@Entity('Account')
export class AccountEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  personId: number;

  @ManyToOne(() => PersonEntity)
  @JoinColumn({ name: 'personId' })
  person: PersonEntity;

  @Column({
    type: 'decimal',
    precision: 18,
    scale: 8,
    transformer: new TransformFloat(),
  })
  balance: number;

  @Column({
    type: 'decimal',
    precision: 18,
    scale: 8,
    transformer: new TransformFloat(),
  })
  dailyWithdrawalLimit: number;

  @Column({ type: 'boolean' })
  isActive: boolean;

  @Column({ type: 'enum', enum: AccountType })
  accountType: AccountType;

  @Column({ type: 'timestamp' })
  @CreateDateColumn()
  createdAt?: Date;

  @Column({ type: 'timestamp' })
  @UpdateDateColumn()
  updatedAt?: Date;

  @Column({ type: 'timestamp' })
  @DeleteDateColumn()
  deletedAt?: Date;
}
