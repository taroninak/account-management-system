import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountEntity } from '../account/account.entity';
import { AccountRepository } from '../account/account.repository';
import { TransactionEntity } from '../transaction/transaction.entity';
import { TransactionRepository } from '../transaction/transaction.repository';
import { NotEnoughFundsException } from '../common/exception/not-enough-funds.exception';
import { InactiveAccountException } from '../common/exception/inactive-account.exception';
import { executeTransaction } from '../common/utils/executor';

type Balance = {
  balance: number;
  dailyWithdrawalLimit: number;
};

@Injectable()
export class BalanceService {
  constructor(
    @InjectRepository(AccountEntity)
    private readonly accountRepository: AccountRepository,
  ) {}

  async checkBalance(accountId: number): Promise<Balance> {
    const { balance, dailyWithdrawalLimit } =
      await this.accountRepository.findOneByOrFail({
        id: accountId,
      });
    return { balance, dailyWithdrawalLimit };
  }

  async withdraw(accountId: number, amount: number): Promise<Balance> {
    await executeTransaction(this.accountRepository, async (manager) => {
      const accountRepository = manager.withRepository(this.accountRepository);
      const transactionRepository = new TransactionRepository(
        TransactionEntity,
        manager,
        manager.queryRunner,
      );
      const account = await accountRepository.findOneByOrFail({
        id: accountId,
      });
      const usedDailyLimit =
        await transactionRepository.getUsedDailyWithdrawalLimit(accountId);
      if (!account.isActive) {
        throw new InactiveAccountException(accountId);
      }

      if (amount > account.balance) {
        throw new NotEnoughFundsException(accountId);
      }

      if (usedDailyLimit + amount > account.dailyWithdrawalLimit) {
        throw new ForbiddenException('Daily withdrawal limit is reached');
      }
      await accountRepository.update(
        { id: accountId },
        { balance: account.balance - amount },
      );
      await transactionRepository.save({
        accountId,
        value: -amount,
      });
    });
    return this.checkBalance(accountId);
  }

  async deposit(accountId: number, amount: number): Promise<Balance> {
    await executeTransaction(this.accountRepository, async (manager) => {
      const accountRepository = manager.withRepository(this.accountRepository);
      const transactionRepository = manager.getRepository(TransactionEntity);

      const account = await accountRepository.findOneByOrFail({
        id: accountId,
      });
      if (!account.isActive) {
        throw new InactiveAccountException(accountId);
      }
      await accountRepository.update(
        { id: accountId },
        { balance: account.balance + amount },
      );
      await transactionRepository.save({
        accountId,
        value: amount,
      });
    });
    return this.checkBalance(accountId);
  }
}
