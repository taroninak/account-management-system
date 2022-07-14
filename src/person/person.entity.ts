import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Person')
export class PersonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  document: string;

  @Column({ type: 'timestamp' })
  birthDate: Date;

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
