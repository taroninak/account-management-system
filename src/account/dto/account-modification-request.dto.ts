import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { AccountType } from '../account.entity';

export class AccountModificationRequestDto {
  @ApiProperty({ required: false, type: 'number' })
  @IsOptional()
  balance?: number;

  @ApiProperty({ required: false, type: 'number' })
  @IsOptional()
  dailyWithdrawalLimit?: number;

  @ApiProperty({ required: false, type: 'boolean' })
  @IsOptional()
  isActive?: boolean;

  @ApiProperty({ enum: AccountType, required: false })
  @IsOptional()
  accountType?: AccountType;
}
