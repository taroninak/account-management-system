import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { AccountType } from '../account.entity';

export class AccountCreationRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  personId: number;

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
