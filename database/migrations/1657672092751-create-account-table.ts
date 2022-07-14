import { MigrationInterface, QueryRunner } from 'typeorm';
import { schema } from '../config';

export class CreateAccountTable1657672092751 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        create type "${schema}"."enum_account_type" as enum ('Checking', 'Savings');
        create table "${schema}"."Account"
        (
            id                     serial                          not null constraint "account_pkey" primary key,
            "personId"             integer                         constraint "account_person_id_fkey" references "${schema}"."Person",
            balance                NUMERIC(18, 8)                  not null  default 0,
            "dailyWithdrawalLimit" NUMERIC(18, 8)                  not null  default 0,
            "isActive"             boolean                         not null  default false,
            "accountType"          "${schema}".enum_account_type   not null  default 'Checking',
            "createdAt"            timestamp with time zone        default CURRENT_TIMESTAMP,
            "updatedAt"            timestamp with time zone,
            "deletedAt"            timestamp with time zone
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.query(`
      drop table "${schema}"."Account";
      drop type "${schema}"."enum_account_type";
    `);
  }
}
