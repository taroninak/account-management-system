import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AccountDto } from '../account/dto/account.dto';
import { BalanceWithdrawalRequestDto } from './dto/balance-withdrawal-request.dto';
import { BalanceDto } from './dto/balance.dto';
import { BalanceService } from './balance.service';
import { mapTo } from '../common/utils/mapper';

@ApiTags('balance')
@Controller('accounts/:accountId/balance')
export class BalanceController {
  constructor(private readonly balanceService: BalanceService) {}

  @Get()
  @ApiOperation({ summary: 'Check balance of account' })
  @ApiResponse({
    status: 200,
    description: 'Sends account balance info',
    type: BalanceDto,
  })
  async checkBalance(
    @Param('accountId') accountId: number,
  ): Promise<BalanceDto> {
    const balance = await this.balanceService.checkBalance(accountId);
    return mapTo(BalanceDto, balance);
  }

  @Post('')
  @ApiOperation({ summary: 'Deposit funds into account' })
  @ApiResponse({
    status: 200,
    description: 'Sends deposit info',
    type: AccountDto,
  })
  async deposit(
    @Param('accountId') accountId: number,
    @Body() request: BalanceWithdrawalRequestDto,
  ): Promise<BalanceDto> {
    const balance = await this.balanceService.deposit(
      accountId,
      request.amount,
    );

    return mapTo(BalanceDto, balance);
  }

  @Delete()
  @ApiOperation({ summary: 'Withdraw money from account' })
  @ApiResponse({
    status: 200,
    description: 'Sends withdrawal info',
    type: AccountDto,
  })
  async withdraw(
    @Param('accountId') accountId: number,
    @Body() request: BalanceWithdrawalRequestDto,
  ): Promise<BalanceDto> {
    const balance = await this.balanceService.withdraw(
      accountId,
      request.amount,
    );

    return mapTo(BalanceDto, balance);
  }
}
