import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { AccountType } from '../account.entity';
import { PersonDto } from '../../person/dto/person.dto';
import { Expose, Type } from 'class-transformer';

export class AccountDto {
  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @Type(() => PersonDto)
  @Expose()
  person: PersonDto;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  balance: number;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  dailyWithdrawalLimit: number;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  isActive: boolean;

  @ApiProperty()
  @IsNotEmpty()
  @Expose()
  accountType: AccountType;

  @ApiProperty()
  @Expose()
  createdAt: Date;

  @ApiProperty()
  @Expose()
  updatedAt: Date;
}
