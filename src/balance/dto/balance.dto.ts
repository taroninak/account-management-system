import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class BalanceDto {
  @ApiProperty()
  @Expose()
  balance: number;

  @ApiProperty()
  @Expose()
  dailyWithdrawalLimit: number;
}
