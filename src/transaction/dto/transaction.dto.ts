import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class TransactionDto {
  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  accountId: number;

  @ApiProperty()
  @Expose()
  value: number;

  @ApiProperty()
  @Expose()
  transactionDate: Date;

  @ApiProperty()
  @Expose()
  createdAt: Date;

  @ApiProperty()
  @Expose()
  updatedAt: Date;
}
