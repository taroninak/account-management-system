import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from './account.entity';
import { AccountRepository } from './account.repository';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { TransactionEntity } from '../transaction/transaction.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AccountEntity,
      TransactionEntity,
      AccountRepository,
    ]),
  ],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
