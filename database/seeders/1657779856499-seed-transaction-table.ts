import { MigrationInterface, QueryRunner } from 'typeorm';
import { schema } from '../config';

export class SeedTransactionTable1657779856499 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO "${schema}"."Transaction"  
        (id, "accountId", value, "transactionDate")
         VALUES (1, 1, 100, now());
         
        INSERT INTO "${schema}"."Transaction"  
        (id, "accountId", value, "transactionDate")
         VALUES (2, 1, -100, now());
        
        INSERT INTO "${schema}"."Transaction"  
        (id, "accountId", value, "transactionDate")
         VALUES (3, 1, 300, now());
          
        INSERT INTO "${schema}"."Transaction"  
        (id, "accountId", value, "transactionDate")
         VALUES (4, 1, -200, now());
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DELETE FROM "${schema}"."Transaction" WHERE id in(1, 2, 3, 4);
    `);
  }
}
