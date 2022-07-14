import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { mapTo } from '../common/utils/mapper';
import { TransactionService } from './transaction.service';
import { TransactionListQueryDto } from './dto/transaction-list-query.dto';
import { TransactionListResponseDto } from './dto/transaction-list-response.dto';
import { TransactionDto } from './dto/transaction.dto';

@ApiTags('transactions')
@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get(':transactionId')
  @ApiOperation({ summary: 'Get specified transaction information' })
  @ApiResponse({
    status: 200,
    description: 'Sends transaction info',
    type: TransactionDto,
  })
  async get(
    @Param('transactionId') transactionId: number,
  ): Promise<TransactionDto> {
    const transaction = await this.transactionService.get(transactionId);
    return mapTo(TransactionDto, transaction);
  }

  @Get()
  @ApiOperation({ summary: 'List account transactions history' })
  @ApiResponse({
    status: 200,
    description: 'Sends transactions statement',
    type: TransactionListResponseDto,
  })
  async list(
    @Query() query: TransactionListQueryDto,
  ): Promise<TransactionListResponseDto> {
    const [transactions, count] = await this.transactionService.list(
      query.accountId,
      query.offset,
      query.limit,
      query.startDate,
      query.endDate,
    );
    return {
      count,
      data: transactions.map((t) => mapTo(TransactionDto, t)),
    };
  }
}
