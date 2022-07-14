import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionEntity } from './transaction.entity';
import { TransactionRepository } from './transaction.repository';
import { getEndOfDay, getStartOfDay } from '../common/utils/date';
import {
  Between,
  FindOptionsWhere,
  LessThanOrEqual,
  MoreThanOrEqual,
} from 'typeorm';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionEntity)
    private readonly transactionRepository: TransactionRepository,
  ) {}

  async get(id: number): Promise<TransactionEntity> {
    return this.transactionRepository.findOneByOrFail({ id });
  }

  async list(
    accountId: number,
    offset: number,
    limit: number,
    startDate?: Date,
    endDate?: Date,
  ): Promise<[TransactionEntity[], number]> {
    const criteria: FindOptionsWhere<TransactionEntity> = { accountId };
    if (startDate && endDate) {
      criteria.transactionDate = Between(
        getStartOfDay(startDate),
        getEndOfDay(endDate),
      );
    } else if (startDate) {
      criteria.transactionDate = MoreThanOrEqual(getStartOfDay(startDate));
    } else if (endDate) {
      criteria.transactionDate = LessThanOrEqual(getEndOfDay(endDate));
    }
    return this.transactionRepository.findAndCount({
      where: criteria,
      skip: offset,
      take: limit,
    });
  }
}
