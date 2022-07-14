import { Repository } from 'typeorm';
import { TransactionEntity } from './transaction.entity';
import { getEndOfDay, getStartOfDay } from '../common/utils/date';

export class TransactionRepository extends Repository<TransactionEntity> {
  async getUsedDailyWithdrawalLimit(accountId: number): Promise<number> {
    const { sum } = await this.createQueryBuilder('transaction')
      .where(
        `transaction.transactionDate BETWEEN :start AND :end 
        AND transaction.value < 0 AND transaction.accountId =:accountId
      `,
        {
          accountId,
          start: getStartOfDay().toISOString(),
          end: getEndOfDay().toISOString(),
        },
      )
      .select('sum(transaction.value) sum')
      .getRawOne();
    return -sum;
  }
}
