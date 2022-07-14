import { IsDate, IsNumber, IsOptional, IsPositive } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class TransactionListQueryDto {
  @ApiProperty({ required: true, type: Number })
  @IsNumber()
  @Type(() => Number)
  accountId: number;

  @ApiProperty({ required: false, type: Date, format: 'YYYY-MM-DD' })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  startDate?: Date;

  @ApiProperty({ required: false, type: Date, format: 'YYYY-MM-DD' })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  endDate?: Date;

  @ApiProperty({ required: false, type: Number })
  @IsOptional()
  @IsNumber()
  offset = 0;

  @ApiProperty({ required: false, type: Number })
  @IsOptional()
  @IsNumber()
  @IsPositive()
  limit = 20;
}
