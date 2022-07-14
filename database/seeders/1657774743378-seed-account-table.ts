import { MigrationInterface, QueryRunner } from 'typeorm';
import { schema } from '../config';

export class SeedAccountTable1657774743378 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO "${schema}"."Account"  
        (id, "personId", balance, "dailyWithdrawalLimit", "isActive", "accountType")
        VALUES (1, 1, 100, 100, true, 'Checking');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DELETE FROM "${schema}"."Account" WHERE id = 1;
    `);
  }
}
