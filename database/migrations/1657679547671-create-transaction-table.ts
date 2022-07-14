import { MigrationInterface, QueryRunner } from 'typeorm';
import { schema } from '../config';

export class CreateTransactionTable1657679547671 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        create table "${schema}"."Transaction"
        (
            id                     serial not null constraint "transaction_pkey" primary key,
            "accountId"            integer constraint "transaction_account_id_fkey" references "${schema}"."Account",
            value                  NUMERIC(18, 8) not null  default 0,
            "transactionDate"      timestamp with time zone default CURRENT_TIMESTAMP,
            "createdAt"            timestamp with time zone default CURRENT_TIMESTAMP,
            "updatedAt"            timestamp with time zone,
            "deletedAt"            timestamp with time zone
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.query(`
      drop table "${schema}"."Transaction";
    `);
  }
}
