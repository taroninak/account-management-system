import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AccountService } from './account.service';
import { AccountDto } from './dto/account.dto';
import { AccountCreationRequestDto } from './dto/account-creation-request.dto';
import { mapTo } from '../common/utils/mapper';
import { AccountModificationRequestDto } from './dto/account-modification-request.dto';

@ApiTags('accounts')
@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get(':accountId')
  @ApiOperation({ summary: 'Get specified account information' })
  @ApiResponse({
    status: 200,
    description: 'Sends account info',
    type: AccountDto,
  })
  async get(@Param('accountId') accountId: number): Promise<AccountDto> {
    const account = await this.accountService.get(accountId);
    return mapTo(AccountDto, account);
  }

  @Post()
  @ApiOperation({ summary: 'Create new account' })
  @ApiResponse({
    status: 200,
    description: 'Sends created account info',
    type: AccountDto,
  })
  async create(
    @Body() request: AccountCreationRequestDto,
  ): Promise<AccountDto> {
    const account = await this.accountService.create(
      request.personId,
      request.balance,
      request.dailyWithdrawalLimit,
      request.isActive,
      request.accountType,
    );
    return mapTo(AccountDto, account);
  }

  @Patch(':accountId')
  @ApiOperation({ summary: 'Partially update account information' })
  @ApiResponse({
    status: 200,
    description: 'Sends updated account info',
    type: AccountDto,
  })
  async update(
    @Param('accountId') accountId: number,
    @Body() request: AccountModificationRequestDto,
  ): Promise<AccountDto> {
    const account = this.accountService.update(
      accountId,
      request.balance,
      request.dailyWithdrawalLimit,
      request.isActive,
      request.accountType,
    );
    return mapTo(AccountDto, account);
  }
}
