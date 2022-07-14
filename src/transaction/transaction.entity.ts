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
import { AccountEntity } from '../account/account.entity';
import { TransformFloat } from '../common/utils/transformer';

@Entity('Transaction')
export class TransactionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accountId: number;

  @ManyToOne(() => AccountEntity)
  @JoinColumn({ name: 'accountId' })
  account: AccountEntity;

  @Column({
    type: 'decimal',
    precision: 18,
    scale: 8,
    transformer: new TransformFloat(),
  })
  value: number;

  @Column({ type: 'timestamp' })
  transactionDate: Date;

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
