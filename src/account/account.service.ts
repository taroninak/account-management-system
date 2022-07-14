import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountEntity, AccountType } from './account.entity';
import { AccountRepository } from './account.repository';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(AccountEntity)
    private readonly accountRepository: AccountRepository,
  ) {}

  async get(id: number): Promise<AccountEntity> {
    return this.accountRepository.findOneByOrFail({ id });
  }

  async create(
    personId: number,
    balance: number,
    dailyWithdrawalLimit: number,
    isActive: boolean,
    accountType: AccountType,
  ): Promise<AccountEntity> {
    const account = await this.accountRepository.save({
      personId,
      balance,
      dailyWithdrawalLimit,
      isActive,
      accountType,
    });
    return this.get(account.id);
  }

  async update(
    id: number,
    balance?: number,
    dailyWithdrawalLimit?: number,
    isActive?: boolean,
    accountType?: AccountType,
  ): Promise<AccountEntity> {
    await this.accountRepository.update(
      {
        id,
      },
      {
        balance,
        dailyWithdrawalLimit,
        isActive,
        accountType,
      },
    );
    return this.get(id);
  }
}
