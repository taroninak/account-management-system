import { MigrationInterface, QueryRunner } from 'typeorm';
import { schema } from '../config';

export class CreatePersonTable1657609828389 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        create table "${schema}"."Person" 
        (
            id              serial not null constraint "person_pkey" primary key,
            name            varchar(20) not null,
            document        varchar(30) not null constraint "person_document_key" unique,
            "birthDate"     timestamp with time zone not null,
            "createdAt"     timestamp with time zone default CURRENT_TIMESTAMP,
            "updatedAt"     timestamp with time zone,
            "deletedAt"     timestamp with time zone
        );
    `);
  }

  down(queryRunner: QueryRunner): Promise<any> {
    return queryRunner.query(`
      drop table "${schema}"."Person";
    `);
  }
}
