import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from '../account/account.entity';
import { TransactionEntity } from '../transaction/transaction.entity';
import { BalanceService } from './balance.service';
import { BalanceController } from './balance.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AccountEntity, TransactionEntity])],
  controllers: [BalanceController],
  providers: [BalanceService],
})
export class BalanceModule {}
