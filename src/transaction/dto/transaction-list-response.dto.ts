import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { TransactionDto } from './transaction.dto';

export class TransactionListResponseDto {
  @ApiProperty()
  @Expose()
  data: TransactionDto[];

  @ApiProperty()
  @Expose()
  count: number;
}
