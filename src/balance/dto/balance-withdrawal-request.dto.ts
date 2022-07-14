import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNumber, IsPositive } from 'class-validator';

export class BalanceWithdrawalRequestDto {
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @Expose()
  amount: number;
}
