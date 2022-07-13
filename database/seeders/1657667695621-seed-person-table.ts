import { MigrationInterface, QueryRunner } from 'typeorm';
import { schema } from '../config';

export class SeedPersonTable1657667695621 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO "${schema}"."Person"  
        (id, name, document, "birthDate") 
        VALUES (1, 'Taron Petrosyan', 'AAAAAAAA', '1992-11-09 22:06:45.051000 +00:00');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DELETE FROM "${schema}"."Person" WHERE id = 1;
    `);
  }
}
