import { EntityManager, Repository } from 'typeorm';

export const executeTransaction = async <T, R extends Repository<T>>(
  repository: R,
  transaction: (manager: EntityManager) => Promise<void>,
): Promise<void> => {
  const queryRunner = repository.manager.connection.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();
  try {
    await transaction(queryRunner.manager);
    await queryRunner.commitTransaction();
  } catch (e) {
    await queryRunner.rollbackTransaction();
    throw e;
  } finally {
    await queryRunner.release();
  }
};
